import { formatZodError } from "@repo/common";
import { HttpException } from "../constants/http-exception";
import { createProductSchema } from "./products.validation";
import { Request, Response, NextFunction } from "express";

export function createProductPipe(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const data = req.body;
  const result = createProductSchema.safeParse(data);
  if (!result.success) {
    throw new HttpException(formatZodError(result.error), 400);
  }
  req.body = result.data;
  next();
}

export function updateProductPipe(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const data = req.body;
  const result = createProductSchema.safeParse(data);
  if (!result.success) {
    throw new HttpException(formatZodError(result.error), 400);
  }
  req.body = result.data;
  console.log(req.body);
  next();
}
