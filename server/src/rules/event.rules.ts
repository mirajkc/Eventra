import Joi from "joi";

export const createEventDTO = Joi.object({
  organizationId: Joi.string().required(),
  title: Joi.string().min(10).max(100).required(),
  description: Joi.string().min(10).max(2000),
  location: Joi.string().min(2).max(50).required(),
  startDate: Joi.date().required(),
  endDate: Joi.date().greater(Joi.ref('startDate')).required(),
  capacity: Joi.number().min(1).max(200).required(),
  category: Joi.string().valid(
    "WORKSHOP",
    "MEETUP",
    "CONFERENCE",
    "WEBINAR",
    "HACKATHON",
    "COMPETITION",
    "OTHER",
  ).required(),
  tags: Joi.array().items(Joi.string()).optional(),
})


export const updateEventDTO = Joi.object({
  id : Joi.string().required(),
  organizationId: Joi.string().required(),
  title: Joi.string().min(10).max(100),
  description: Joi.string().min(10).max(2000),
  location: Joi.string().min(2).max(50),
  startDate: Joi.date(),
  endDate: Joi.date().greater(Joi.ref('startDate')),
  capacity: Joi.number().min(1).max(200),
  status: Joi.string().valid("CANCELLED"),
  category: Joi.string().valid(
    "WORKSHOP",
    "MEETUP",
    "CONFERENCE",
    "WEBINAR",
    "HACKATHON",
    "COMPETITION",
    "OTHER",
  ),
  tags: Joi.array().items(Joi.string()),
  image : Joi.any().allow(null)
})


export const updateEventByAdminDTO = Joi.object({
  id : Joi.string().required(),
  title: Joi.string().min(10).max(100),
  description: Joi.string().min(10).max(2000),
  location: Joi.string().min(2).max(50),
  startDate: Joi.date(),
  endDate: Joi.date().greater(Joi.ref('startDate')),
  capacity: Joi.number().min(1).max(200),
  status: Joi.string().valid("CANCELLED"),
  category: Joi.string().valid(
    "WORKSHOP",
    "MEETUP",
    "CONFERENCE",
    "WEBINAR",
    "HACKATHON",
    "COMPETITION",
    "OTHER",
  ),
  tags: Joi.array().items(Joi.string()),
  image : Joi.any().allow(null)
})
