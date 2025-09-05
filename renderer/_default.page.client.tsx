export { render };
export { onHydrationEnd };
export { onPageTransitionStart };
export { onPageTransitionEnd };
export const clientRouting = true;
export const hydrationCanBeAborted = true;

import './css/index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { getPageTitle } from './getPageTitle';
import type { PageContextClient } from './types';

let root: ReactDOM.Root;
async function render(pageContext: PageContextClient) {
  const { Page, pageProps } = pageContext;
  const page = <Page {...pageProps} />;
  const container = document.getElementById('page-content')!;
  if (pageContext.isHydration) {
    root = ReactDOM.hydrateRoot(container, page);
  } else {
    if (!root) {
      root = ReactDOM.createRoot(container);
    }
    root.render(page);
  }
  document.title = getPageTitle(pageContext);
}

function onHydrationEnd() {
  console.log('Hydration finished; page is now interactive.');
  // Remove flicker prevention and show content
  document.body.classList.add('hydrated');
}
function onPageTransitionStart() {
  console.log('Page transition start');
  document.querySelector('body')!.classList.add('page-is-transitioning');
}
function onPageTransitionEnd() {
  console.log('Page transition end');
  document.querySelector('body')!.classList.remove('page-is-transitioning');
}
