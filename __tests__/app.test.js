const request = require('supertest');
const app = require('../lib/app');

describe('app routes', () => {
  // eslint-disable-next-line space-before-function-paren
  test.skip('get all from / ', async () => {
    // const color = {
    //   body: 'hi',
    //   status: '200 OK',
    //   contentType: 'text/plain'
    // };
    const res = await request(app)
      .get('/');
    expect(res.text).toEqual('hi');
  });
  test('test index exists', async() => {
    const res = await request(app)
      .get('/index.html');
    expect(res.text).toEqual('<h2>this is an html string</h2>');
  });
});


