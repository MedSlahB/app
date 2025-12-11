const http = require('http');

const server = http.createServer((req, res) => {
  res.end("Hello from OpenShift Tekton CI/CD pipeline!");
});

server.listen(8080, () => {
  console.log('App running on port 8080');
});

