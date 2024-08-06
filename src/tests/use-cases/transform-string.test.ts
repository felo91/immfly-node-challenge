import { describe, it } from "node:test";
import { strict as assert } from "node:assert";
import {
  reverseString,
  transforVowelToUppercase,
  transformString,
  transformStringLikeArrayIntoArray,
} from "../../lib/use-cases/transform-string";

describe("trasnform-array", () => {
  describe("reverseString function", () => {
    it("should reverse the characters in the string", () => {
      assert.strictEqual(reverseString("hello"), "olleh");
    });

    it("should handle empty string", () => {
      assert.strictEqual(reverseString(""), "");
    });
  });

  describe("transforVowelToUppercase function", () => {
    it("should convert all vowels to uppercase", () => {
      assert.strictEqual(transforVowelToUppercase("hello"), "hEllO");
    });

    it("should return the same string if no vowels are present", () => {
      assert.strictEqual(transforVowelToUppercase("rhythm"), "rhythm");
    });
  });

  describe("transformString function", () => {
    it("should reverse the string and convert vowels to uppercase", () => {
      assert.strictEqual(transformString("hello world"), "dlrOw OllEh");
    });

    it("should return an empty string if input is empty", () => {
      assert.strictEqual(transformString(""), "");
    });
  });

  describe("transformStringLikeArrayIntoArray", () => {
    it("should transform string representation of an array into an actual array", () => {
      const input = "['apple', 'banana', 'cherry']";
      const expected = ["apple", "banana", "cherry"];
      assert.deepEqual(transformStringLikeArrayIntoArray(input), expected);
    });

    it("should handle empty string inputs", () => {
      const input = "[]";
      const expected = [];
      assert.deepEqual(transformStringLikeArrayIntoArray(input), expected);
    });

    it("should ignore spaces and quotes correctly", () => {
      const input = '[" apple", " banana ", "cherry " ]';
      const expected = ["apple", "banana", "cherry"];
      assert.deepEqual(transformStringLikeArrayIntoArray(input), expected);
    });

    it("should ignore throw an error if result is not an Array", () => {
      const input = '[" apple", " ';
      assert.deepEqual(transformStringLikeArrayIntoArray(input), ["apple"]);
    });
  });
});
