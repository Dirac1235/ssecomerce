import { createCategorySchema } from "./category.validation";
import { formatZodError } from "@repo/common";
import { HttpException } from "../constants/http-exception";
import { Request, Response, NextFunction } from "express";

export function createCategoryPipe(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const data = req.body;
  const result = createCategorySchema.safeParse(data);
  if (!result.success) {
    throw new HttpException(formatZodError(result.error), 400);
  }
  req.body = result.data;
  next();
}

export function updateCategoryPipe(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const data = req.body;
  const result = createCategorySchema.safeParse(data);
  if (!result.success) {
    throw new HttpException(formatZodError(result.error), 400);
  }
  req.body = result.data;
  next();
}
