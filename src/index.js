import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import App from './components/App';

// react-router-dom node package
import { BrowserRouter as Router } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router basename={process.env.PUBLIC_URL}>
      <App />
    </Router>
  </React.StrictMode>
);