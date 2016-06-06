import React from 'react';
import css from 'react-css-modules';
import styles from './Main.sss';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Main = (props) => (
  <div>
    <Header />
    {props.children}
    <Footer />
  </div>
);

Main.propTypes = {
  children: React.PropTypes.node,
};

export default css(Main, styles);
