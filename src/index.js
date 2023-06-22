import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { App } from './App';
import './index.css';

const routes = (
  <Router>
    <App />
  </Router>
);


ReactDOM.render(
  routes, // Implementa acá el enrutador.
  document.getElementById('root')
);
