import z from "zod"

export const ICreateOrganizationDTO = z.object({
  image: z.any().optional(),
  thumbnail: z.any().optional(),
  name: z.string().min(3, "Name must be at least 3 characters long").max(50, "Name must be at most 50 characters long"),
  description: z.string().min(50, "Description must be at least 50 characters long").max(500, "Description must be at most 500 characters long"),
  website: z.string().url("Invalid website URL").optional().nullable().or(z.literal("")),
  type: z.enum(["INDIVIDUAL", "COMPANY", "EDUCATIONAL", "COMMUNITY", "NON_PROFIT", "GOVERNMENT"])
})


export const IUpdateOrganizationDTO = z.object({
  image: z.any().optional(),
  thumbnail: z.any().optional(),
  name: z.string().min(3, "Name must be at least 3 characters long").max(50, "Name must be at most 50 characters long").optional(),
  description: z.string().min(50, "Description must be at least 50 characters long").max(500, "Description must be at most 500 characters long").optional(),
  website: z.string().url("Invalid website URL").optional().nullable().or(z.literal("")).optional(),
  type: z.enum(["INDIVIDUAL", "COMPANY", "EDUCATIONAL", "COMMUNITY", "NON_PROFIT", "GOVERNMENT"]).optional()
})

export const OrganizationRoleUpdateDTO = z.object({
  role: z.string(),
  id: z.string(),
  organizationId: z.string()
})