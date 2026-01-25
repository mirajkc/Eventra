import type { Request, Response, NextFunction } from "express";
import type { IErrorTypes } from "../lib/types/errorhandler.types.js";
import { Prisma } from "../generated/prisma/client.js";
import { prisma } from "../config/prisma.config.js";


export default async function errorHandler(
  error: any,
  req: Request,
  res: Response,
  next: NextFunction
) {
  const code = error.code && typeof error.code === 'number' ? error.code : 500;
  const message = error.message ?? "Server error";
  const status = error.status ?? "SERVER_ERR";
  const data = error.data ?? null;
  if (error instanceof Prisma.PrismaClientKnownRequestError) {
    if (error.code === "P2002") {
      return res.status(409).json({
        message: "Duplicate field value. This already exists.",
        status: "UNIQUE_CONSTRAINT_ERROR",
        field: (error.meta as any)?.target,
      });
    }
  }
  console.log(error);
  if (code === 500) {
    await prisma.errorLog.create({
      data: {
        code: code,
        message: message,
        status: status
      }
    })
  }
  return res.status(code).json({
    message,
    status,
    data,
  });
}
