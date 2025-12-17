const http = require('http');

const server = http.createServer((req, res) => {
  res.end("Test maybe 123");
});

server.listen(8080, () => {
  console.log('App running on port 8080');
});

