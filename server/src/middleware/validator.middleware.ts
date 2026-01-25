import type { Request, Response, NextFunction } from "express";
import Joi from "joi";
import type { IErrorTypes } from "../lib/types/errorhandler.types.js";

export default function validator(schema: Joi.ObjectSchema) {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = req.body;

      if (!data || Object.keys(data).length === 0) {
        throw {
          code: 400,
          message: "Payload is empty.",
          status: "EMPTY_PAYLOAD_ERR",
        } as IErrorTypes;
      }

      await schema.validateAsync(data, { abortEarly: false });

      next();
    } catch (err: any) {
      let errorInstance = err;

      if (err instanceof Joi.ValidationError) {
        const details: any = {};

        err.details.forEach((e: any) => {
          if (e.context?.key) {
            details[e.context.key] = e.message;
          }
        });

        errorInstance = {
          code: 400,
          message: "Validation Failed",
          status: "VALIDATION_FAILED_ERR",
          data : details,
        };
      }

      next(errorInstance);
    }
  };
}
