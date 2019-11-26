const fs = require('fs');
const url = require('url');

const renderFile = (filename, res) => {
  fs.readFile(filename, (err, data) => {
    if (err) {
      res.statusCode = 404;
      res.write('file not found');
    } else {
      res.write(data);
    }

    res.end();
  });
}

module.exports = {
  handleRequest: (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/html');
    let path = url.parse(req.url).pathname;

    switch (path) {
      case '/':
        renderFile('./index.html', res);
        break;
      case '/users':
        renderFile('./users.html' , res)
        break;
      default:
        renderFile('./404.html' , res)
    }
  }
}