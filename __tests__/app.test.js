const request = require('supertest');
const app = require('../lib/app');

describe('app routes', () => {
  // eslint-disable-next-line space-before-function-paren
  test('get all from / ', async () => {
    // const color = {
    //   body: 'hi',
    //   status: '200 OK',
    //   contentType: 'text/plain'
    // };
    const res = await request(app)
      .get('/');
    expect(res.text).toEqual('hi');
  });
});

describe('POST', () => {
  test('POST /echo', async () => {
    const res = await request(app)
      .post('/echo')
      .send('holla back');
    expect(res.text).toEqual('holla back');
  });

});
