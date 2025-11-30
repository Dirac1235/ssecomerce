import { createPostSchema } from "@repo/common";
import { formatZodError } from "@repo/common";
import { HttpException } from "../constants/http-exception";
import { Request, Response, NextFunction } from "express";

export function createPostPipe(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const data = req.body;
  const result = createPostSchema.safeParse(data);
  if (!result.success) {
    throw new HttpException(formatZodError(result.error), 400);
  }
  req.body = result.data;
  next();
}

export function updatePostPipe(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const data = req.body;
  const result = createPostSchema.safeParse(data);
  if (!result.success) {
    throw new HttpException(formatZodError(result.error), 400);
  }
  req.body = result.data;
  next();
}
