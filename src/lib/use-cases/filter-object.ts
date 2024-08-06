import { Country } from "../types/country.ts";

export const filterCountryOrCode = (countries?: Country[], filter?: string) => {
  if (!countries) return;
  if (filter) {
    countries = countries.filter((item) => item.country.includes(filter) || item.code.includes(filter));
  }

  return countries;
};
