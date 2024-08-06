import { describe, it } from "node:test";
import { strict as assert } from "node:assert";
import { filterCountryOrCode } from "../../lib/use-cases/filter-object.ts";
import { Country } from "../../lib/types/country.ts";

describe("filterCountryOrCode", () => {
  it("should return all countries when filter is empty", () => {
    const countries: Country[] = [
      { country: "Spain", code: "ES", vat: 21 },
      { country: "Germany", code: "DE", vat: 19 },
      { country: "France", code: "FR", vat: 20 },
    ];
    const result = filterCountryOrCode(countries, "");
    assert.deepEqual(result, countries);
  });

  it("should filter countries based on the country name", () => {
    const countries: Country[] = [
      { country: "Spain", code: "ES", vat: 21 },
      { country: "Germany", code: "DE", vat: 19 },
      { country: "France", code: "FR", vat: 20 },
    ];
    const result = filterCountryOrCode(countries, "Germany");
    assert.deepEqual(result, [{ country: "Germany", code: "DE", vat: 19 }]);
  });

  it("should filter countries based on the country code", () => {
    const countries: Country[] = [
      { country: "Spain", code: "ES", vat: 21 },
      { country: "Germany", code: "DE", vat: 19 },
      { country: "France", code: "FR", vat: 20 },
    ];
    const result = filterCountryOrCode(countries, "FR");
    assert.deepEqual(result, [{ country: "France", code: "FR", vat: 20 }]);
  });

  it("should return undefined when the input country list is undefined", () => {
    const result = filterCountryOrCode(undefined, "FR");
    assert.strictEqual(result, undefined);
  });

  it("should handle case where filter does not match any country or code", () => {
    const countries: Country[] = [
      { country: "Spain", code: "ES", vat: 21 },
      { country: "Germany", code: "DE", vat: 19 },
      { country: "France", code: "FR", vat: 20 },
    ];
    const result = filterCountryOrCode(countries, "UK");
    assert.deepEqual(result, []);
  });
});
