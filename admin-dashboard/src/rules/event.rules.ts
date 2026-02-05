import z from 'zod'
export const editEventSchema = z.object({
  id : z.string(),
  title: z.string().min(10).max(100),
  description: z.string().min(10).max(2000),
  location: z.string().min(2).max(50),
  startDate: z.date(),
  endDate: z.date(),
  capacity: z.number().min(1).max(200),
  status: z.enum(["CANCELLED", "DELETED", "PUBLISHED", "DRAFT", "PENDING"]).optional(),
  category: z.enum([
    "WORKSHOP",
    "MEETUP",
    "CONFERENCE",
    "WEBINAR",
    "HACKATHON",
    "COMPETITION",
    "OTHER",
  ]),
  tags: z.array(z.string()),
  reason : z.string().min(10).max(2000),
})
