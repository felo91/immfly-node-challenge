import { strict as assert } from "node:assert";
import { describe, it } from "node:test";
import { Request, Response, NextFunction } from "express";
import { sortBy } from "../../lib/middlewares/sort-by";

const createRequest = (query: object): Request => {
  return {
    query,
  } as Request;
};

const createResponse = (data: any[]): Response => {
  const res = {} as Response;
  res.locals = { data };
  return res;
};

const nextFunction: NextFunction = () => {};

describe("sortBy middleware", () => {
  it("should should handle empty data gracefully", () => {
    const req = createRequest({ order: "asc" });
    const res = {} as Response;

    sortBy("vat")(req, res, nextFunction);

    assert.deepEqual(res.locals, undefined);
  });

  it("should sort data in ascending order by specified parameter", () => {
    const req = createRequest({ order: "asc" });
    const res = createResponse([
      { vat: 20, country: "A" },
      { vat: 10, country: "B" },
      { vat: 30, country: "C" },
    ]);

    sortBy("vat")(req, res, nextFunction);

    assert.deepEqual(res.locals.data, [
      { vat: 10, country: "B" },
      { vat: 20, country: "A" },
      { vat: 30, country: "C" },
    ]);
  });

  it("should sort data in descending order by specified parameter", () => {
    const req = createRequest({ order: "desc" });
    const res = createResponse([
      { vat: 20, country: "A" },
      { vat: 10, country: "B" },
      { vat: 30, country: "C" },
    ]);

    sortBy("vat")(req, res, nextFunction);

    assert.deepEqual(res.locals.data, [
      { vat: 30, country: "C" },
      { vat: 20, country: "A" },
      { vat: 10, country: "B" },
    ]);
  });

  it("should handle missing order gracefully", () => {
    const req = createRequest({});
    const res = createResponse([
      { vat: 20, country: "A" },
      { vat: 10, country: "B" },
      { vat: 30, country: "C" },
    ]);

    sortBy("vat")(req, res, nextFunction);

    assert.deepEqual(res.locals.data, [
      { vat: 20, country: "A" },
      { vat: 10, country: "B" },
      { vat: 30, country: "C" },
    ]);
  });

  it("should return 400 for invalid order", () => {
    const req = createRequest({ order: "invalid" });
    const res = {} as Response;
    res.status = (code: number) => {
      assert.equal(code, 400);
      return res;
    };
    res.send = (body: any) => {
      assert.deepEqual(body, [
        {
          received: "invalid",
          code: "invalid_enum_value",
          options: ["asc", "desc"],
          path: ["order"],
          message: "Invalid enum value. Expected 'asc' | 'desc', received 'invalid'",
        },
      ]);
      return res;
    };

    sortBy("vat")(req, res, nextFunction);
  });
});
