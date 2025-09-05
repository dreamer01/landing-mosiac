export type { PageContextServer };
export type { PageContextClient };
export type { PageContext };
export type { PageProps };

import type {
  PageContextServer as PageContextBuiltIn,
  PageContextClient as PageContextBuiltInClient,
} from 'vike/types';

type Page = (pageProps: PageProps) => React.ReactElement;
type PageProps = Record<string, unknown>;

export type PageContextCustom = {
  Page: Page;
  pageProps?: PageProps;
  exports: {
    documentProps?: {
      title: string;
    };
  };
  documentProps?: {
    title: string;
  };
};

type PageContextServer = PageContextBuiltIn & PageContextCustom;
type PageContextClient = PageContextBuiltInClient & PageContextCustom;

type PageContext = PageContextClient | PageContextServer;
