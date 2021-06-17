const net = require('net');
const parseRequest = require('./utils/parseRequest');
const createResponse = require('./utils/createResponse');
const fsPromises = require('fs').promises;

const app = net.createServer(socket => {
  socket.on('data', data => {
    const request = parseRequest(data.toString());

    // eslint-disable-next-line keyword-spacing
    if (request.method === 'GET' && request.path === '/index.html') {
      return fsPromises.readFile('./public/index.html')
        .then(contents => {
          return socket.end(createResponse({
            body: contents, contentType:'text/html', status: '200 OK'
          }));
        });
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
