const express = require('express');
const next = require('next');

const env = process.env.NODE_ENV !== 'production';
const app = next({ env });
const handle = app.getRequestHandler();

app.prepare().then(_ => {
  const server = express();

  server.get('/posts/:id', (req, res) => {
    const page = '/post'; //maps custom route to this page
    const params = { title: req.params.id };
    app.render(req, res, page, params);
  });

  server.get('*', (req, res) => handle(req, res));

  server.listen(3000, err => {
    if (err) throw err;
    console.log('localhost:3000 running');
  });

}).catch(ex => {
  console.error(ex.stack);
  process.exit(1);
});
