import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import express from 'express';
import routes from '../app/routes';
import Helmet from 'react-helmet';

const app = express();
const port = process.env.PORT || 3000;

app.use('/assets', express.static('dist'));

const renderPage = (html, initialState) => {
  const head = Helmet.rewind();
  return (
    `
    <!DOCTYPE html>
    <html ${head.htmlAttributes.toString()}>
      <head>
        <meta charset="utf-8">
        ${head.title.toString()}
        ${head.meta.toString()}
        ${head.link.toString()}
        <link href="/assets/style.css" rel="stylesheet" />
      </head>
      <body>
        <div id="root">${html}</div>
        <script>
          window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}
        </script>
        <script src="/assets/bundle.js"></script>
      </body>
    </html>
    `
  );
};

app.get('*', (req, res) => {
  match({ routes, location: req.url }, (error, redirect, props) => {
    if (error) {
      res.status(500).send(error.message);
    } else if (redirect) {
      res.redirect(302, redirect.pathname + redirect.search);
    } else if (props) {
      res.status(200).send(renderPage(renderToString(<RouterContext {...props} />)));
    } else {
      res.status(404).send('Not found');
    }
  });
});

/* eslint-disable no-console */
app.listen(port, () => {
  console.log(`Production server running at localhost: ${port}`);
});
/* eslint-enable no-console */
