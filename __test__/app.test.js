const request = require('supertest');
const testApp = require("../app.js");


describe('Post /', () => {
  afterAll(done => {
    testApp.server.close();
    done();
  });

  it('should return response', async () => {
    const response = await request(testApp)
      .post('/')
      .send({userGuess: "Congress shall make no fun of me"})
      .then(res => {
        expect(res.body.userGuess).toBe("Congress shall make no fun of me");
      });


  });
});