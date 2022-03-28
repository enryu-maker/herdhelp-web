import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import reportWebVitals from './reportWebVitals';

import Navbar from './Nav/Navbar'
import Headder from './Head/headder'
import Footer from './footer/footer'




ReactDOM.render(
  <React.StrictMode>
    <Navbar/>
    <Headder/>
    <Footer/>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
