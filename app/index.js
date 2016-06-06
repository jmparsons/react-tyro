import { AppContainer } from 'react-hot-loader';
import React from 'react';
import { render } from 'react-dom';
import Root from './containers/Root';

render(
  <AppContainer>
    <Root />
  </AppContainer>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./containers/Root', () => {
    /* eslint global-require: "off" */
    const NextRoot = require('./containers/Root').default;
    render(
      <AppContainer>
        <NextRoot />
      </AppContainer>,
      document.getElementById('root')
    );
  });
}
