import React from 'react';
import css from 'react-css-modules'
import styles from './Main.sss';
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

const Main = (props) => {
  return (
    <div>
      <Header />
      {props.children}
      <Footer />
    </div>
  );
}

export default css(Main, styles)