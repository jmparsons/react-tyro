import React from 'react';
import css from 'react-css-modules'
import styles from './App.sss';
import Header from '../../components/Header/Header'

const App = () => {
  return (
    <div>
      <Header />
      <h1>Hello, world. Dude</h1>
    </div>
  );
}

export default css(App, styles)