import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import reportWebVitals from './reportWebVitals';

import Navbar from './Nav/Navbar'
ReactDOM.render(
  <React.StrictMode>
    <Navbar/>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
