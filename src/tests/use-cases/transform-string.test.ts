import { describe, it } from "node:test";
import { strict as assert } from "node:assert";
import { reverseString, transforVowelToUppercase, transformString } from "../../lib/use-cases/transform-string.ts";

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
});
