import type { Request, Response, NextFunction } from "express";
import type { IErrorTypes } from "../lib/types/errorhandler.types.js";
import { Prisma } from "../generated/prisma/client.ts";


export default function errorHandler(
  error: IErrorTypes,
  req: Request,
  res: Response,
  next: NextFunction
) {
  const code  = error.code ?? 500;
  const message = error.message ?? "Server error";
  const status = error.status ?? "SERVER_ERR";
  const data = error.data ?? null;
  if (error instanceof Prisma.PrismaClientKnownRequestError) {
    if (error.code === "P2002") {
      return res.status(409).json({
        message: "Duplicate field value. This already exists.",
        status: "UNIQUE_CONSTRAINT_ERROR",
        field: error.meta?.target,
      });
    }
  }
  return res.status(code).json({
    message,
    status,
    data,
  });
}
