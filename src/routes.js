import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './components/App';
import Home from './components/Home';
import ChatApp from './components/ChatApp';
import NoFound from './components/NoFound';

import './reset.css';
import './style.css';


render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="chat" component={ChatApp}/>
      <Route path="*" component={NoFound}/>
    </Route>
  </Router>
, document.getElementById('root'));