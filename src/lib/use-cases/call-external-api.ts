import { Request, Response, NextFunction } from "express";
import axios from "axios";

export const get = (api: string) => async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { data } = await axios.get(api);
    res.locals.data = data.record;
    next();
  } catch (error: any) {
    res.status(500).send(error.message);
  }
};

export default { get };
