import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import App from './components/App';
import { HashRouter as Router } from 'react-router-dom';
import { HelmetProvider } from "react-helmet-async"; // Helmet allows us to change the index.html <head>
// Import localization for french translations
import "./locales";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <React.Suspense fallback="Loading...">
      <Router basename="/" hashType="noslash">
        <HelmetProvider>
          <App />
        </HelmetProvider>
      </Router>
    </React.Suspense>
  </React.StrictMode>
);