module.exports = ({ body = '', contentType = 'text/html', status = '200 OK' }) => {
  return `HTTP/1.1 ${status}
Accept-Range bytes
content-Length: ${body.length}
Content-Type: ${contentType}\r
\r
${body}`;
};
