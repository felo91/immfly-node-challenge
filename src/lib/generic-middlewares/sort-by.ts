import { Request, Response, NextFunction } from "express";
import { z } from "zod";

const sortSchema = z.object({
  order: z.enum(["asc", "desc"]).optional(),
});

export const sortBy = (property: string) => {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!res.locals || !res.locals.data) return next();

    const result = sortSchema.safeParse(req.query);
    if (!result.success) return res.status(400).send(result.error.errors);
    const { order } = result.data;

    if (order) {
      res.locals.data = res.locals.data.sort((a: any, b: any) =>
        order === "asc" ? a[property] - b[property] : b[property] - a[property]
      );
    }

    next();
  };
};
