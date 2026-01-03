import type { Request, Response, NextFunction } from "express";
import type { IErrorTypes } from "../lib/types/errorhandler.types.js";

export default function errorHandler(
  error: IErrorTypes,
  req: Request,
  res: Response,
  next: NextFunction
) {
  const code = error.code ?? 500;
  const message = error.message ?? "Server error";
  const status = error.status ?? "SERVER_ERR";
  const data = error.data ?? null;

  return res.status(code).json({
    message,
    status,
    data,
  });
}
