import React from 'react';
import css from 'react-css-modules'
import styles from './Header.sss';

const Header = () => {
  return (
    <div styleName='title'>Header</div>
  );
}

export default css(Header, styles)