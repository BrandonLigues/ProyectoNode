// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { SomeContextProvider } from './SomeContext';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <SomeContextProvider>
        <App />
      </SomeContextProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);