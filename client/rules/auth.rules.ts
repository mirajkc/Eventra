import z from "zod";

export const loginDTO = z.object({
  email: z.string().email().nonempty(),
  password: z.string().regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, "Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character"),
})

