
import Joi from "joi";

export const organizationDTO = Joi.object({
  name : Joi.string().min(10).max(50).required(),
  description : Joi.string().min(50).max(500).allow(null).default("This organization does not have any description"),
  website : Joi.string().allow(null),
  type : Joi.string().allow(null)
})

export const memberRoleDTO = Joi.object({
  id : Joi.string().required(),
  role : Joi.string().required(),
  organizationId : Joi.string().required()
})

export const updateOrganizationDTO = Joi.object({
  name : Joi.string().min(10).max(50).required(),
  description : Joi.string().min(50).max(500).allow(null).default("This organization does not have any description"),
  website : Joi.string().allow(null),
  type : Joi.string()
})  