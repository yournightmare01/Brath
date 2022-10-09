import React from 'react';
import ReactDOM from 'react-dom/client';
import { worker } from './mocks/browser';
import App from './App';

import './sass/main.scss';

worker.start({
  onUnhandledRequest: 'bypass',
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
