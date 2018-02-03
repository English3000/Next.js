const express = require('express');
const next = require('next');

//cors
//body parser

const env = process.env.NODE_ENV !== 'production';
const app = next({ env });
const handle = app.getRequestHandler();
//I'd assume this finds a matching component from ./pages

app.prepare().then(_ => {
  const server = express();

  server.get('/posts/:id', (req, res) => {
    const page = '/post'; //maps custom route to this page
    const params = { title: req.params.id };
    app.render(req, res, page, params);
  });

  //default route
  server.get('*', (req, res) => handle(req, res));

  server.listen(3000, err => {
    if (err) throw err;
    console.log('localhost:3000 running');
  });

}).catch(err => {
  console.error(err.stack);
  process.exit(1);
});

//launches a server for routing & rendering

// ./routes, ./controllers, ./views, ./models
