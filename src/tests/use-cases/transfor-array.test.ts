import { describe, it } from "node:test";
import { strict as assert } from "node:assert";
import { addBetween } from "../../lib/use-cases/transform-array.ts";

describe("addBetween from transform-array", () => {
  it("should return an array with all non-nullish items", () => {
    const addBetweenData = {
      start: "Hello",
      newItem: "World",
      end: "!",
    };
    const result = addBetween(addBetweenData);
    assert.deepEqual(result, ["Hello", "World", "!"]);
  });

  it("should return an array omitting nullish items", () => {
    const addBetweenData = {
      start: "Hello",
      newItem: null,
      end: "!",
    };
    const result = addBetween(addBetweenData);
    assert.deepEqual(result, ["Hello", "!"]);
  });

  it("should return an empty array if all inputs are null or undefined", () => {
    const addBetweenData = {
      start: null,
      newItem: undefined,
      end: null,
    };
    const result = addBetween(addBetweenData);
    assert.deepEqual(result, []);
  });

  it("should handle cases where only the newItem is provided", () => {
    const addBetweenData = {
      newItem: "Only item",
    };
    const result = addBetween(addBetweenData);
    assert.deepEqual(result, ["Only item"]);
  });

  it("should return an empty array if no data is provided", () => {
    const addBetweenData = {};
    const result = addBetween(addBetweenData);
    assert.deepEqual(result, []);
  });
});
