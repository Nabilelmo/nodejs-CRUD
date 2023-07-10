const http = require('http');

const routes = requires('./routes')

const server = http.createServer(routes);

server.listen(3000);