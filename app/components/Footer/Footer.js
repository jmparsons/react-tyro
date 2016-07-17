import React from 'react';
import css from 'react-css-modules';
import styles from './Footer.sss';

const Footer = () => (
  <div>
    <div styleName="content">&copy; 2016 JMParsons</div>
  </div>
);

export default css(Footer, styles);
