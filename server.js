const http = require('http');
const app = require('./app');

const server = http.createServer((req, res) => {
  res.end('hello');
});

server.listen(3000, () => {
  console.log('listening on port 3000');
});
