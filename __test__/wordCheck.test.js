const {compareStrings, isMatchingPhrase} = require("../wordCheck");
//const request = require("supertest");

describe("wordCheck.js", () => {

  describe("compareStrings", () => {
    it("should return true for matching strings with random beginning and ending whitespace", () => {
      expect(compareStrings("  bird ", "bird   ").isMatch).toBeTruthy();
    });

    it("should return false with partial match of sand", () => {
      let result = compareStrings("sand", "sandbox");
      expect(result.isMatch).toBeFalsy();
      expect(result.stringMatch).toBe("sand");
    });

    it("should return false with multiple word string", () => {
      let result = compareStrings("funny is cool and happy today", "funny is cool but not today");
      expect(result.isMatch).toBeFalsy();
      expect(result.stringMatch).toBe("funny is cool ");
    });

    it("should return false with an empty string", () => {
      let result = compareStrings("funny", "sandbox");
      expect(result.isMatch).toBeFalsy();
      expect(result.stringMatch).toBe("");
    });


  });

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

