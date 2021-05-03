const request = require('supertest');
const testApp = require("../app.js");
//const {compareStrings} = require("../wordCheck.js");
const assert = require("assert");


describe('Post /', () => {
  afterAll(done => {
    testApp.server.close();
    done();
  });

  it('should return response 302', async () => {

    //jest.mock("../wordCheck.js");
    //const {compareStrings} = require("../wordCheck.js");
    //compareStrings.mockImplementation(() => {isMatch: true});

    let res = await request(testApp)
      .post('/')
      //.send({userGuess: "Here is what I got"});
    
      //console.log("res body: ", res.body);

    expect(res.status).toBe(302);



  });
});