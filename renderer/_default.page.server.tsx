import React from 'react';
import { renderToStream } from 'react-streaming/server';
import { escapeInject } from 'vite-plugin-ssr/server';

import { getPageTitle } from './getPageTitle';
import type { PageContextServer } from './types';

const passToClient = ['pageProps', 'documentProps', 'someAsyncProps'];

async function render(pageContext: PageContextServer) {
  const { Page, pageProps } = pageContext;

  const stream = await renderToStream(<Page {...pageProps} />, {
    disable: true,
  });

  const title = getPageTitle(pageContext);

  const documentHtml = escapeInject`<!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>${title}</title>
      </head>
      <body>
        <div id="page-view">${stream}</div>
      </body>
    </html>`;

  return {
    documentHtml,
    pageContext: async () => {
      return {
        someAsyncProps: 42,
      };
    },
  };
}

export { render, passToClient };
