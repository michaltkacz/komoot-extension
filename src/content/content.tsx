import React from 'react';
import ResizableContainer from '@/content/components/ResizableContainer';
import { render, inject } from '@/common/render';

export const Content = () => {
  return <ResizableContainer>content text</ResizableContainer>;
};

// const createContainer = (id: string) => {
//   const container = document.createElement('div');
//   container.id = id;
//   container.style.width = '50%';
//   container.style.height = 'calc(100vh - 108.43px)';
//   container.style.flex = '1 0 auto';
//   container.style.background = 'pink';
//   return container;
// };

// if (process.env.WDS === 'true') {
//   // render in contnet.html only while using webpack dev server (npm run server:dev)
//   render(<Content />, document.querySelector('#contentRoot'));
// } else {
//   // render on komoot page with debounce
//   setTimeout(() => {
//     const container = createContainer('contentContainer');
//     document.querySelector('.c-planview__body')?.appendChild(container);
//     render(<Content />, container);
//   }, 3000);
// }

// render in contnet.html only while using webpack dev server (npm run server:dev)
// if (process.env.WDS === 'true') {
// injectContent(document.querySelector('#contentRoot'));
// }

// render in contnet.html
render(<Content />, document.querySelector('#contentRoot'));
// inject on komoot page
setTimeout(() => {
  inject(
    chrome.runtime.getURL('content.html'),
    document.querySelector('.c-planview__body')
  );
}, 5000);
