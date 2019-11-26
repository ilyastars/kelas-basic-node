const http = require('http');
const fs = require('fs');

const hostname = 'localhost';
const port = 3000;

const handleRequest = (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-type', 'text/html');

  fs.readFile('./index.html', (err, data) => {
    if (err) {
      res.statusCode = 404;
      res.write('file not found');
    } else {
      res.write(data);
    }

    res.end();
  });
}

const server = http.createServer(handleRequest);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});