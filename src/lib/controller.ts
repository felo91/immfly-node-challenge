import { Router } from "express";
import callAPI from "./use-cases/call-external-api.ts";
import { transformString } from "./use-cases/transform-string.ts";
import transformArray from "./use-cases/transform-array.ts";
import { filterCountryOrCode } from "./use-cases/filter-object.ts";
import { sortBy } from "./generic-middlewares/sort-by.ts";

const router = Router();
const api = "https://api.jsonbin.io/v3/b/5f69afbe65b18913fc510ce8";

router.get("/countries", callAPI.get(api), filterCountryOrCode, sortBy("vat"), (req, res) => {
  res.json(res.locals.data);
});
router.get("/reverse/:string", (req, res) => {
  const { string } = req.params;
  const result = transformString(string);
  res.send(result);
});
router.get("/append", (req, res) => {
  const { start, end } = req.query;
  const result = transformArray.addBetween(start as string, end as string, process.env.SIMPLE_ARRAY as string);
  res.json(result);
});

export default router;
