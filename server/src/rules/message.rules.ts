import Joi from "joi";

export const sendMessageDTO = Joi.object({
  message : Joi.string().min(1).max(100).required()
})