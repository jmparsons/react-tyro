import React from 'react';
import css from 'react-css-modules';
import styles from './Header.sss';
import Nav from '../Nav/Nav';
import { Link } from 'react-router';
import logoUrl from './react-logo.png';

const Header = () => (
  <div styleName="bg">
    <div styleName="content">
      <Link styleName="logo" to="/">
        <img src={logoUrl} width="40" height="36" alt="React" />
        Tyro
      </Link>
      <Nav />
    </div>
  </div>
);

export default css(Header, styles);
