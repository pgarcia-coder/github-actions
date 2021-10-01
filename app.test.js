const request = require('supertest');
const app = require('./app');

describe('Test app', () => {
  it('it should return Hello World!', (done) => {
    request(app)
      .get('/')
      .expect(200, 'Hello World!', done);
  });
});