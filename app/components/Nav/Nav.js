import React from 'react';
import css from 'react-css-modules'
import { Link } from 'react-router'
import styles from './Nav.sss';

const Nav = () => {
  return (
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </div>
  );
}

export default css(Nav, styles)