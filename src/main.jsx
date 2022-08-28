import React from 'react';
import ReactDOM from 'react-dom/client';
import Reset from 'styled-modern-css-reset';
import App from './App';
import { BlockStyles } from './styles';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BlockStyles />
    <Reset />
    <App />
  </React.StrictMode>
);
