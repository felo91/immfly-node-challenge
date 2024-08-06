import { Request, Response, NextFunction } from "express";

export default (err: any, req: Request, res: Response, next: NextFunction) => {
  if (res.headersSent) {
    return next(err);
  }

  let statusCode = 500;
  if (err.isJoi) {
    statusCode = 400;
  }

  console.error(err);
  res.status(statusCode).json({ error: err.message });
};
