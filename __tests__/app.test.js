const request = require('supertest');
const app = require('../lib/app');

describe('app routes', () => {
  test('get all from / ', async () => {
    const color = {
      body: 'hi',
      status: '200 OK',
      contentType: 'text/plain'
    };
    const res = await request(app)
      .get('/');
    expect(res.text).toEqual(`HTTP/1.1 200 OK Accept-Ranges: bytes
Content-Length: 17
Content-Type: text/plain\r
\r
hi');
  });
});
