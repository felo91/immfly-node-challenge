import { Request, Response, NextFunction } from "express";
import Joi from "joi";

const sortSchema = Joi.object({
  order: Joi.string().valid("asc", "desc").optional(),
}).unknown(true);

export const sortBy = (property: string) => {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!res.locals || !res.locals.data) return next();

    const { error, value } = sortSchema.validate(req.query);
    if (error) throw error;
    const order = value.order;

    if (order) {
      res.locals.data = res.locals.data.sort((a: any, b: any) =>
        order === "asc" ? a[property] - b[property] : b[property] - a[property]
      );
    }

    next();
  };
};
