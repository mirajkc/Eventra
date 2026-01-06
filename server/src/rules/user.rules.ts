import Joi from "joi"

export const userUpdateDTO = Joi.object({
  name : Joi.string().min(5).max(25).allow(null),
  phone : Joi.string().min(10).max(14).allow(null),
})