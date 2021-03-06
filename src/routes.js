import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './containers/App';
import NotFoundPage from './containers/NotFoundPage.js';
import LoginPage from './containers/LoginPage';
import FormPage from './containers/FormPage';
import TablePage from './containers/TablePage';
import Dashboard from './containers/DashboardPage';
import Event from './containers/EventPage';
import EventDiscover from './containers/EventDiscover';
import ChatPage from './containers/ChatPage';

export default (
  <Route>
    <Route path="login" component={LoginPage}/>
    <Route path="/" component={App}>
      <IndexRoute component={EventDiscover}/>
      <Route path="dashboard" component={Dashboard}/>
      <Route path="chat" component={ChatPage}/>
      <Route path="events" component={Dashboard}>
        <Route path=":id" component={LoginPage}/>
      </Route>
      <Route path="form" component={FormPage}/>
      <Route path="table" component={TablePage}/>
      <Route path="*" component={NotFoundPage}/>
    </Route>
  </Route>
);
