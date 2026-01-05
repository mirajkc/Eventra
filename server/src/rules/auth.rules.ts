import Joi from "joi";

export const registerDTO = Joi.object({
  email: Joi.string().email().required(),

  password: Joi.string()
    .min(6)
    .max(30)
    .required(),

  confirmPassword: Joi.string()
    .valid(Joi.ref("password"))
    .required(),

  role: Joi.string()
    .allow(null)
    .default("CUSTOMER"),
});


export const loginDTO = Joi.object({
  email : Joi.string().email().required(),
  password : Joi.string().min(6).max(30).required()
})

export const emailDTO = Joi.object({
  email : Joi.string().email().required()
})

export const OTPDTO = Joi.object({
  otp : Joi.string().required()
})