const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(`
    <html>
      <body style="background-color: #2d3436; color: #dfe6e9; font-family: sans-serif; text-align: center; padding-top: 50px;">
        <h1 style="color: #00cec9;">ArgoCD + Tektonn + Ansible</h1>
        <h2 style="border-bottom: 2px solid #00cec9; display: inline-block; padding-bottom: 10px;">
          Application Version 2.0.0
        </h2>
        <p>Status: <span style="color: #55efc4;">Successfully Updated via Pipeline</span></p>
        <p>Build Time: ${new Date().toLocaleString()}</p>
      </body>
    </html>
  `);
});

server.listen(8080, () => {
  console.log('App v2.0.0 running on port 8080');
});

