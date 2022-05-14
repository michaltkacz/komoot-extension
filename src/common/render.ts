import * as ReactDOM from 'react-dom/client';

export type ReactComponent = React.ReactChild | Iterable<React.ReactNode>;

export const render = (
  component: ReactComponent,
  container: Element | null,
  options?: ReactDOM.RootOptions
) => {
  if (!container) {
    console.info(`No container`);
    return;
  }

  ReactDOM.createRoot(container, options).render(component);
};

export const inject = (srcUrl: string, container: Element | null) => {
  if (!container) {
    console.info(`No container`);
    return;
  }

  const iframe = document.createElement('iframe');
  iframe.src = srcUrl;
  container.append(iframe);
};
