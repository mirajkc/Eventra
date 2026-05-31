import Joi from "joi";

export const chatRequestDTO = Joi.object({
  message: Joi.string().min(1).max(4000).required(),
  locale: Joi.string().valid("en").optional()
})
