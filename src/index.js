import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import reportWebVitals from './reportWebVitals';

import Navbar from './Nav/Navbar'
import Headder from './Head/headder'
import Footer from './footer/footer'
import Login from './login/login'
import Register from './Register/register'


ReactDOM.render(
  <React.StrictMode>
    <Navbar/>
    <Headder/>
    <Login/>
    <Register/>
    <Footer/>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
