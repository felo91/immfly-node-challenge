import { Request, Response, NextFunction } from "express";
import { z } from "zod";

import { Country } from "../types/country.ts";

const filterSchema = z.object({
  filter: z.string().optional(),
});

export const filterCountryOrCode = (req: Request, res: Response, next: NextFunction) => {
  if (!res.locals || !res.locals.data) return next();
  const data = res.locals.data;

  const result = filterSchema.safeParse(req.query);
  if (!result.success) return res.status(400).send(result.error.errors);
  const { filter } = result.data;

  if (filter) {
    res.locals.data = data.filter((item: Country) => item.country.includes(filter) || item.code.includes(filter));
  }

  next();
};
