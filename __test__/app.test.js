const request = require('supertest');
const testApp = require("../app.js");
const assert = require("assert");


describe('GET /', () => {
  afterAll(done => {
    testApp.server.close();
    done();
  });

  it('should return response 200', async () => {

    let res = await request(testApp)
      .get('/')

    expect(res.status).toBe(200);

  });
});

describe('POST /', () => {
  afterAll(done => {
    testApp.server.close();
    done();
  });

  it('should return response 302', async () => {

    let res = await request(testApp)
      .post('/')

    expect(res.status).toBe(302);

  });
});
