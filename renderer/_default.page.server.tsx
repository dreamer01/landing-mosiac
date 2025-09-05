import React from 'react';
import { renderToString } from 'react-dom/server';
import { escapeInject } from 'vike/server';

import { getPageTitle } from './getPageTitle';
import type { PageContextServer } from './types';

const passToClient = ['pageProps', 'documentProps', 'someAsyncProps'];

async function render(pageContext: PageContextServer) {
  const { Page, pageProps } = pageContext;

  const pageHtml = renderToString(<Page {...pageProps} />);

  const title = getPageTitle(pageContext);

  const documentHtml = escapeInject`<!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>${title}</title>
        <style>
          /* Prevent flicker during hydration */
          #page-view { opacity: 0; }
          .hydrated #page-view { opacity: 1; transition: opacity 0.2s ease-in-out; }
        </style>
      </head>
      <body>
        <div id="page-container">
          <div id="page-view">
            <div id="page-content">${pageHtml}</div>
          </div>
        </div>
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
