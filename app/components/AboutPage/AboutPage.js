import React from 'react';
import css from 'react-css-modules';
import styles from './AboutPage.sss';
import Helmet from 'react-helmet';

const AboutPage = () => (
  <div>
    <Helmet title="About" />
    <h1>About Page</h1>
  </div>
);

export default css(AboutPage, styles);
