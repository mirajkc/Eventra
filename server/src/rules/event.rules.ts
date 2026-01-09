import Joi from "joi";

export const createEventDTO = Joi.object({
  organizationId: Joi.string().required(),
  creatorId: Joi.string().required(),
  title: Joi.string().min(10).max(100).required(),
  description: Joi.string().min(50).max(2000).default("The event does not have description"),
  location: Joi.string().min(10).max(100).required(),
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
    "OTHERS",
  ).required(),
  tags: Joi.array().items(Joi.string()).optional(),
})
