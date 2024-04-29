import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { REPO_NAME } from './constants/repo';
import App from './App';

import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter basename={`/${REPO_NAME}/`}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>,
);
