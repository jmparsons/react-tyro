import React from 'react';
import css from 'react-css-modules';
import styles from './ContactPage.sss';
import Helmet from 'react-helmet';

const ContactPage = () => (
  <div>
    <Helmet title="Contact" />
    <h1 styleName="contact">Contact Page</h1>
  </div>
);

export default css(ContactPage, styles);
