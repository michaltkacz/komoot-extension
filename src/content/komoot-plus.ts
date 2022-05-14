import React from 'react';
import * as ReactDOM from 'react-dom/client';
import { Content } from '@/content/content';

export type ReactComponent = React.ReactChild | Iterable<React.ReactNode>;

export class KomootPlus extends HTMLElement {
  createMountPoint() {
    const mountPoint = document.createElement('span');
    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.appendChild(mountPoint);

    return mountPoint;
  }

  renderComponent() {
    const mountPoint = this.createMountPoint();
    const root = ReactDOM.createRoot(mountPoint);
    // root.render(this.component);
    root.render(React.createElement(Content));
  }

  connectedCallback() {
    this.renderComponent();
  }
}

customElements.define('komoot-plus', KomootPlus);

export const injectContent = (container: Element | null) => {
  if (container) {
    const komootPlus = document.createElement('komoot-plus');
    container.append(komootPlus);
  } else {
    console.info('No container :(');
  }
};
