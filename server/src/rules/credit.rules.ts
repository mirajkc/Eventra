import Joi from "joi";

export const creditPurchaseDTO = Joi.object({
  package : Joi.string().required()
})