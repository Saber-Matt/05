module.exports = rawRequest => {
  const [method, path] = rawRequest.split(' ');
  const body = rawRequest.split('\r\n\r\n')[1]; console.log(rawRequest);
  console.log(body);
  return { method, path, body };
};

//make a GET route with a path of /
