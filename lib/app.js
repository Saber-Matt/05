const net = require('net');
const parseRequest = require('./utils/parseRequest');
const createResponse = require('./utils/createResponse');

const app = net.createServer(socket => {
  socket.on('data', data => {
    const request = parseRequest(data.toString());

    // eslint-disable-next-line keyword-spacing
    if (request.method === 'GET' && request.path === '/index.html') {
      return fsPromises.readFile('./index.html', 'utf8')
      const p = fsPromises.readFile('./index.html', 'utf8')
        .then(contents =>
    //   socket.write(createResponse({ body: 'hi', contentType: 'text/plain' }));

    //   // } if (request.method === 'POST' && request.path === '/echo') {
    //   //   socket.write(createResponse({ body: response.body, contentType: 'text/plain' }));
    // } else if (request.method === 'POST' && request.path === '/echo') {
    //   socket.write(createResponse(
    //     { body: request.body, contentType: 'text/plain' }));

    } else {
      socket.end(createResponse(({
        body: 'Not Found',
        status: '404 Not Found',
        contentType: 'text/plain'
      })));
    }
  });
});
module.exports = app;
