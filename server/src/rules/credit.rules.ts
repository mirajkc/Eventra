import Joi from "joi";

export const creditPurchaseDTO = Joi.object({
  package : Joi.string().valid("SMALL", "MEDIUM", "LARGE").required()
})