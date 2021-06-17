const request = require('supertest');
const app = require('../lib/app');

describe('test async routes', () => (
  // eslint-disable-next-line space-before-function-paren
  it('test html fs', async () => {
    const res = await request(app)
      .get('/index.html');
    expect(res.text).toEqual('./index.html', 'utf8');
  })
));
