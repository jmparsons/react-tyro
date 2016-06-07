import React from 'react';
import css from 'react-css-modules';
import styles from './HomePage.sss';
import Helmet from 'react-helmet';

const HomePage = () => (
  <div>
    <Helmet title="Home" />
    <h1>Home Page</h1>
  </div>
);

export default css(HomePage, styles);
