import { Request, Response, NextFunction } from "express";
import path from "path";

import { AnyZodObject } from "zod";

const formValidation =
  (schema: AnyZodObject) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.parseAsync({
        body: req.body,
        query: req.query,
        params: req.params,
      });
      return next();
    } catch (error: any) {
      const errors: any = [];

      error.errors.map((err: any) =>
        errors.push({
          path: err.path[1],
          message: err.message,
        })
      );
      return res.status(404).json({ valdation: errors });
    }
  };

export default formValidation;
