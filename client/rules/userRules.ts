import z from "zod";

export const IUpdateProfileDTO = z.object({
  name: z.string().min(3, "Name must be at least 3 characters long").max(50, "Name must be at most 50 characters long"),
  phone: z.string().min(10, "Phone must be at least 10 characters long").max(15, "Phone must be at most 15 characters long"),
  image: z.any().optional(),
})