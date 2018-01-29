import Express from 'express'; //https://expressjs.com/en/starter/generator.html

const server = Express();

server.get('/', (req, res) => res.send('home'));
server.get('/pages', (req, res) => res.send('page')); //controller.action
server.post('/pages', (req, res) => res.send('create a page'));
server.delete( '/pages/:id(\d+)', (req, res) => res.send(
  `delete page ${req.params.id}`
) );


const cb0 = (req, res, next) => {
  console.log('CB0');
  next(); //bypasses remaining callbacks
};
const cb1 = (req, res, next) => console.log('CB1');
const cb2 = (req, res) => res.send('Hello from C!');

server.get('/example/c', [cb0, cb1, cb2]);


server.listen(3000, () => console.log('callback'));

// ./routes is Express equiv. of Rails routes.rb
