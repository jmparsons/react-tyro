import React from 'react';
import css from 'react-css-modules';
import styles from './Header.sss';
import Nav from '../Nav/Nav';

const Header = () => (
  <div>
    <Nav />
    <div styleName="title">Header</div>
  </div>
);

export default css(Header, styles);
