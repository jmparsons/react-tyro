import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Main from './components/Main/Main';
import HomePage from './components/HomePage/HomePage';
import AboutPage from './components/AboutPage/AboutPage';
import ContactPage from './components/ContactPage/ContactPage';

const routes = (
  <Route path="/" component={Main}>
    <IndexRoute component={HomePage} />
    <Route path="about" component={AboutPage} />
    <Route path="contact" component={ContactPage} />
  </Route>
);

export default routes;
