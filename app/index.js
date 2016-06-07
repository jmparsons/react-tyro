import { AppContainer } from 'react-hot-loader';
import React from 'react';
import { render } from 'react-dom';
import Root from './containers/Root';

const root = document.getElementById('root') || document.createElement('div');

if (root.id !== 'root') {
  root.id = 'root';
  document.body.insertBefore(root, document.body.firstChild);
}

render(
  <AppContainer>
    <Root />
  </AppContainer>,
  root
);

if (module.hot) {
  module.hot.accept('./containers/Root', () => {
    /* eslint global-require: "off" */
    const NextRoot = require('./containers/Root').default;
    render(
      <AppContainer>
        <NextRoot />
      </AppContainer>,
      root
    );
  });
}
