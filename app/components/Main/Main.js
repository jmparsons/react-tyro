import React from 'react';
import css from 'react-css-modules';
import styles from './Main.sss';
import Helmet from 'react-helmet';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Main = (props) => (
  <div>
    <Helmet
      htmlAttributes={{ lang: 'en' }}
      titleTemplate="%s | React Tyro"
      defaultTitle="React Tyro"
    />
    <Header />
    <div styleName="content">
    {props.children}
    </div>
    <Footer />
  </div>
);

Main.propTypes = {
  children: React.PropTypes.node,
};

export default css(Main, styles);
