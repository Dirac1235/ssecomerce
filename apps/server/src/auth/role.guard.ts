import { HttpException } from "../constants/http-exception";

import { Request, Response, NextFunction } from "express";

export function roleGuard(roles: string[]) {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!req.user) {
      throw new HttpException("Unauthorized", 401);
    }
    if (roles.includes(req.user?.role)) {
      next();
    } else {
      throw new HttpException("Forbidden", 403);
    }
  };
}
