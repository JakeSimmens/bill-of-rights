const {isMatchingPhrase} = require("../wordCheck");
//const request = require("supertest");

describe("wordCheck.js", () => {
  describe("isMatchingPhrase", ()=> {
    it("should return true for a matching phrase", ()=> {
      expect(
        isMatchingPhrase("Dogs are better than cats", "Dogs are better than cats")
        ).toBeTruthy();
    });

    it("should return false for a non-matching phrase", ()=> {
      expect(
        isMatchingPhrase("Dogs are better than cats, maybe", "Dogs are better than cats")
        ).toBeFalsy();
    });
  });
});

