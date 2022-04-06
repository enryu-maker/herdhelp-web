import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import reportWebVitals from './reportWebVitals';
import App from './App'
// import { Router ,brouserHistory, Route} from 'react-router';
// import {BrowserRouter} from 'react-router-dom'




ReactDOM.render(
  <>
  <React.StrictMode>
  {/* <BrowserRouter> */}
  {/* <Router history={brouserHistory}>
  <Route path={"/"} component={root}>
    <IndexRoute component={Home}/>
  </Route>
  </Router> */}
    <App/>
  {/* </BrowserRouter> */}
  </React.StrictMode>
  </>,
  document.getElementById('root')
);
reportWebVitals();
