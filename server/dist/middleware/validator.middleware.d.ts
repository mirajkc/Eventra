import type { Request, Response, NextFunction } from "express";
import Joi from "joi";
export default function validator(schema: Joi.ObjectSchema): (req: Request, res: Response, next: NextFunction) => Promise<void>;
//# sourceMappingURL=validator.middleware.d.ts.map