import React from 'react'
import { Route, IndexRoute } from 'react-router'
import HomePage from './components/HomePage/HomePage'
import AboutPage from './components/AboutPage/AboutPage'
import ContactPage from './components/ContactPage/ContactPage'

const routes = (
  <Route path='/' component={props => <div>{props.children}</div>}>
    <IndexRoute component={HomePage} />
    <Route path='about' component={AboutPage} />
    <Route path='contact' component={ContactPage} />
  </Route>
)

export default routes
