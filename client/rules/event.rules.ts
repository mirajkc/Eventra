import { z } from "zod";

export const CreateEventSchema = z.object({
  organizationId: z.string(),
  title: z.string().min(10, "Title must be at least 10 characters").max(100, "Title must be less than 100 characters"),
  description: z.string().min(10, "Description must be at least 10 characters").max(2000, "Description must be less than 2000 characters"),
  location: z.string().min(2, "Location is required").max(50, "Location must be less than 50 characters"),
  startDate: z.date("Start date is required"),
  endDate: z.date("End date is required"),
  capacity: z.coerce.number().min(1, "Capacity must be at least 1").max(200, "Capacity must be less than 200"),
  category: z.enum(["WORKSHOP", "MEETUP", "CONFERENCE", "WEBINAR", "HACKATHON", "COMPETITION", "OTHER"]),
  tags: z.union([z.string(), z.array(z.string())]).optional().default(""),
  image: z.any().optional(),
}).refine((data) => data.endDate > data.startDate, {
  message: "End date must be greater than start date",
  path: ["endDate"],
})



// export const createEventDTO = Joi.object({
//   organizationId: Joi.string().required(),
//   title: Joi.string().min(10).max(100).required(),
//   description: Joi.string().min(10).max(2000),

//   location: Joi.string().min(2).max(50).required(),

//   startDate: Joi.date().required(),
//   endDate: Joi.date().greater(Joi.ref('startDate')).required(),
//   capacity: Joi.number().min(1).max(200).required(),
//   category: Joi.string().valid(
//     "WORKSHOP",
//     "MEETUP",
//     "CONFERENCE",
//     "WEBINAR",
//     "HACKATHON",
//     "COMPETITION",
//     "OTHER",
//   ).required(),
//   tags: Joi.array().items(Joi.string()).optional(),
// })