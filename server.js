const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('src\jobs.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use('/api', router);
server.listen(8000, () => {
  console.log('JSON Server is running on port 3000');
});
