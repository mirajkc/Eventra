import z from "zod";

export const IUpdateProfileDTO = z.object({
  name: z.string().min(3, "Name must be at least 3 characters long").max(50, "Name must be at most 50 characters long"),
  phone: z.string().min(10, "Phone must be at least 10 characters long").max(15, "Phone must be at most 15 characters long").optional().nullable().or(z.literal("")),
  image: z.any().optional(),
})

export const passwordChangeDTO = z.object({
  password: z.string().min(8, "Password must be at least 8 characters long").max(50, "Password must be at most 50 characters long"),
  confirmPassword: z.string().min(8, "Confirm Password must be at least 8 characters long").max(50, "Confirm Password must be at most 50 characters long")
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
})


