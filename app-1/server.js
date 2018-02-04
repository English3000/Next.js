//imports
const express = require('express');
const next = require('next');
import postsController from './controllers/posts';
//middlewares
// cors
// body-parser
// morgan (logger)
// history

const app = next({
  dev: process.env.NODE_ENV !== 'production'
});
/* next(options (object))

Supported options:
  dev (bool) whether to launch Next.js in dev mode - default false
  dir (string) where the Next project is located - default '.'
  quiet (bool) Hide error messages containing server information - default false
  conf (object) the same object you would use in next.config.js - default {}
*/
const pagesController = app.getRequestHandler(); //handler == controller
// .getRequestHandler is a built-in Next.js controller that looks in ./pages
// & returns the first .js file that (case-sensitively) matches the request's path

// res.send({json: ...}) // w/in a controller action, to return a response

//what does .prepare do? prob. middleware-esque setup?
// .prepare must be async, hence the .then
app.prepare().then(() => {
  //BELOW is standard for a non-Next.js app
  const server = express(); //start express server

  // server.use([path,] middlewareCallback) //uses middleware for all calls (to path)
  //a middlewareCallback has the arg's ([err,] req, res, next)

  // CUSTOM REST ROUTES
  server.get('/test', () => console.log('test'));
  server.get('/api/posts', postsController.index);
  // .get('/api/_/:id', _Controller.show)
  // .delete('/api/_/:id', _Controller.destroy)
  // .post('/api/_', _Controller.create)
  // .patch('/api/_/:id', _Controller.update)

  // .get('/api/_/new', _Controller.new)
  // .get('/api/_/:id/edit', _Controller.edit)

  //intercepts all requests
  server.get('*', (req, res) => pagesController(req, res)); //for this to work, app must already be .prepareD
  //Express compiles '*' into /^(.*)\/?$/i
  // => regex that starts with ANYTHING + ends with OPTIONAL '/'
  // I think the 'i' means case-insensitive??

  server.listen(3000, err => {
    if (err) throw err;
    console.log('connected to localhost:3000');
    //pings current path ('/' by default) every few seconds
  });
  /* server.listen = function() {
    const httpServer = http.createServer(this);
    return httpServer.listen.apply(server, arguments);
  }; */
}).catch(err => { //if preparing the Next.js app fails...
  //print the error & exit the 'process'; express server is never started
  console.error(err.stack);
  process.exit(1);
});
