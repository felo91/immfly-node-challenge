/*import { strict as assert } from "node:assert";
import { describe, it } from "node:test";
import { Request, Response, NextFunction } from "express";
import { filterCountryOrCode } from "../lib/use-cases/filter-object";
import { Country } from "../lib/types/country";

const createRequest = (query: object): Request => {
  return { query } as Request;
};

const createResponse = (data: Country[]): Response => {
  const res = {} as Response;
  res.locals = { data };
  res.status = (code: number) => {
    res.statusCode = code;
    return res;
  };
  return res;
};

const nextFunction: NextFunction = () => {};

describe("filterCountryOrCode middleware", () => {
  it("should handle missing res.locals gracefully", () => {
    const req = createRequest({ filter: "A" });
    const res = {} as Response;

    filterCountryOrCode(req, res, nextFunction);

    assert.equal(res.locals, undefined);
  });

  it("should handle empty data gracefully", () => {
    const req = createRequest({ filter: "A" });
    const res = createResponse([]);

    filterCountryOrCode(req, res, nextFunction);

    assert.deepEqual(res.locals.data, []);
  });

  it("should filter data by country name", () => {
    const req = createRequest({ filter: "A" });
    const res = createResponse([
      {
        country: "Argentina",
        code: "AR",
        vat: 0,
      },
      {
        country: "Brazil",
        code: "BR",
        vat: 0,
      },
      {
        country: "Canada",
        code: "CA",
        vat: 0,
      },
    ]);

    filterCountryOrCode(req, res, nextFunction);

    assert.deepEqual(res.locals.data, [
      { country: "Argentina", code: "AR", vat: 0 },
      { country: "Canada", code: "CA", vat: 0 },
    ]);
  });

  it("should filter data by country code", () => {
    const req = createRequest({ filter: "C" });
    const res = createResponse([
      {
        country: "Argentina",
        code: "AR",
        vat: 0,
      },
      {
        country: "Brazil",
        code: "BR",
        vat: 0,
      },
      {
        country: "Canada",
        code: "CA",
        vat: 0,
      },
    ]);

    filterCountryOrCode(req, res, nextFunction);

    assert.deepEqual(res.locals.data, [{ country: "Canada", code: "CA", vat: 0 }]);
  });

  it("should return 400 for invalid query parameters", () => {
    const req = createRequest({ filter: 123 });
    const res = createResponse([
      {
        country: "Argentina",
        code: "AR",
        vat: 0,
      },
      {
        country: "Brazil",
        code: "BR",
        vat: 0,
      },
      {
        country: "Canada",
        code: "CA",
        vat: 0,
      },
    ]);

    res.status = (code: number) => {
      assert.equal(code, 400);
      return res;
    };
    res.send = (body: any) => {
      assert(body.length > 0);
      return res;
    };

    filterCountryOrCode(req, res, nextFunction);
  });
});
*/
