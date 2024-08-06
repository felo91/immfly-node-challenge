import { Router } from "express";
import errorHandler from "./middlewares/errors.js";
import callAPI from "./use-cases/call-external-api.js";
import { transformString, transformStringLikeArrayIntoArray } from "./use-cases/transform-string.js";
import transformArray from "./use-cases/transform-array.js";
import { filterCountryOrCode } from "./use-cases/filter-object.js";
import { sortBy } from "./middlewares/sort-by.js";
import { Country } from "./types/country.js";
import Joi from "joi";

const router = Router();
const api = "https://api.jsonbin.io/v3/b/5f69afbe65b18913fc510ce8";

const countriesEndpointSchema = Joi.object({
  filter: Joi.string().optional(),
  order: Joi.string().valid("asc", "desc").optional(),
});

router.get(
  "/countries",
  async (req, res, next) => {
    try {
      const { error, value } = countriesEndpointSchema.validate(req.query);
      if (error) throw error;
      const filter = value.filter as string;

      const countries = (await callAPI.get(api)) as Country[];

      const filteredCountries = filterCountryOrCode(countries, filter);
      res.locals.data = filteredCountries;
      next();
    } catch (err) {
      next(err);
    }
  },
  sortBy("vat"),
  (req, res) => res.json(res.locals.data)
);

const reverseEndpointSchema = Joi.object({
  string: Joi.string(),
});

router.get("/reverse/:string", (req, res) => {
  const { error, value } = reverseEndpointSchema.validate(req.params);
  if (error) throw error;
  const result = transformString(value.string);
  res.send(result);
});

const appendEndpointSchema = Joi.object({
  start: Joi.string().optional(),
  end: Joi.string().optional(),
});

router.get("/append", (req, res) => {
  const { error, value } = appendEndpointSchema.validate(req.query);
  if (error) throw error;
  const { start, end } = value;
  const newItem = transformStringLikeArrayIntoArray(process.env.SIMPLE_ARRAY);
  const result = transformArray.addBetween({ start, end, newItem });
  res.json(result);
});

router.use(errorHandler);

export default router;
