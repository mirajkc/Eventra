import { z } from "zod";

export const CreateEventSchema = z.object({
  id: z.string().optional(),
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


export const EventTicketDTO = z.object({
  ticket: z.string().length(5, "Ticket must be 5 characters long"),
})


export const updateEventDTO = z.object({
  id : z.string(),
  organizationId: z.string(),
  title: z.string().min(10).max(100),
  description: z.string().min(10).max(2000),
  location: z.string().min(2).max(50),
  startDate: z.date(),
  endDate: z.date(),
  capacity: z.coerce.number().min(1).max(200),
  status: z.enum(["CANCELLED"]).optional(),
  category: z.enum([
    "WORKSHOP",
    "MEETUP",
    "CONFERENCE",
    "WEBINAR",
    "HACKATHON",
    "COMPETITION",
    "OTHER",
  ]),
  tags: z.any().optional(),
  image : z.any().optional(),
})


