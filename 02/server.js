const http = require('http');
const route = require('./router');

http.createServer(route.handleRequest).listen(3000, () => {
    console.log("server run at port 3000");
});