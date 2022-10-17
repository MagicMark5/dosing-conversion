import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import App from './components/App';

// react-router-dom node package
import { BrowserRouter as Router } from 'react-router-dom';

const baseURL = process.env.NODE_ENV === 'production' ? process.env.PUBLIC_URL : '/';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router basename={baseURL}>
      <App />
    </Router>
  </React.StrictMode>
);