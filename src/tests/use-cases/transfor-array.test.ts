import { describe, it } from "node:test";
import { strict as assert } from "node:assert";
import { addBetween } from "../../lib/use-cases/transform-array";

describe("addBetween from transform-array", () => {
  it("should correctly combine start, newItem, and end into a single array", () => {
    const addBetweenData = {
      start: "Hello",
      newItem: ["world", "test"],
      end: "!",
    };
    const result = addBetween(addBetweenData);
    assert.deepEqual(result, ["Hello", "world", "test", "!"]);
  });

  it("should handle cases where start is undefined", () => {
    const addBetweenData = {
      newItem: ["world", "test"],
      end: "!",
    };
    const result = addBetween(addBetweenData);
    assert.deepEqual(result, ["world", "test", "!"]);
  });

  it("should handle cases where end is undefined", () => {
    const addBetweenData = {
      start: "Hello",
      newItem: ["world", "test"],
    };
    const result = addBetween(addBetweenData);
    assert.deepEqual(result, ["Hello", "world", "test"]);
  });

  it("should handle cases where newItem is undefined", () => {
    const addBetweenData = {
      start: "Hello",
      end: "!",
    };
    const result = addBetween(addBetweenData);
    assert.deepEqual(result, ["Hello", "!"]);
  });

  it("should handle cases where all inputs are null", () => {
    const addBetweenData = {
      start: null,
      newItem: null,
      end: null,
    };
    const result = addBetween(addBetweenData);
    assert.deepEqual(result, []);
  });

  it("should exclude null values from the result array", () => {
    const addBetweenData = {
      start: "Hello",
      newItem: [null, "world", null, "test", null],
      end: "!",
    };
    const result = addBetween(addBetweenData);
    assert.deepEqual(result, ["Hello", "world", "test", "!"]);
  });

  it("should return an empty array if all optional fields are undefined or null", () => {
    const addBetweenData = {};
    const result = addBetween(addBetweenData);
    assert.deepEqual(result, []);
  });
});
