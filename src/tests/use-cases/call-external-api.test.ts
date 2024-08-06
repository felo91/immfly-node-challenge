import { describe, it, mock } from "node:test";
import { strict as assert } from "node:assert";
import { get } from "../../lib/use-cases/call-external-api.ts";
import axios from "axios";

describe("get from callExternalApi", () => {
  it("should return the record from the API response", async () => {
    const fakeData = {
      data: {
        record: { id: 1, name: "Test Record" },
      },
    };
    mock.method(axios, "get", async () => fakeData);

    const result = await get("http://example.com/api");

    assert.deepEqual(result, { id: 1, name: "Test Record" });
    assert.deepEqual(axios.call.length, 1);
  });

  it("should handle different data structures", async () => {
    mock.method(axios, "get", async () => ({
      data: {
        record: { id: 2, title: "Another Record", details: "More details here" },
      },
    }));

    const result = await get("http://example.com/api/other");
    assert.deepEqual(result, { id: 2, title: "Another Record", details: "More details here" });
    assert.deepEqual(axios.call.length, 1);
  });

  it("should handle API errors", async () => {
    // Simulate an API error
    mock.method(axios, "get", async () => {
      throw new Error("Network error");
    });

    try {
      await get("http://example.com/api");
      assert.fail("Expected get to throw an error");
    } catch (e: any) {
      assert.equal(e.message, "Network error");
    }
  });

  it("should handle no data returned", async () => {
    // Test case when no data is returned
    mock.method(axios, "get", async () => ({
      data: {},
    }));

    const result = await get("http://example.com/api/empty");
    assert.equal(result, undefined); // Depending on how you handle this in your actual function
  });
});
