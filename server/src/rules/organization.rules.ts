import Joi from "joi";

export const organizationDTO = Joi.object({
  name : Joi.string().min(10).max(50).required(),
  description : Joi.string().min(50).max(500).allow(null).default("This organization does not have any description"),
  website : Joi.string().allow(null)
})
