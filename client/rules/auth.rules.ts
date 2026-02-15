import z from "zod";

export const loginDTO = z.object({
  email: z.string().email().nonempty(),
  password: z.string().regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, "Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character"),
})

export const registerDTO = z.object({
  email: z.string().email().nonempty(),
  password: z.string().regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, "Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character"),
  confirmPassword: z.string().nonempty("Confirm password is required"),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
})

export const forgotPasswordOtpDTO = z.object({
  email: z.string().email().nonempty("Email is required"),
})

export const verifyOtpDTO = z.object({
  email: z.string().email().nonempty("Email is required"),
  otp: z.string().length(6, "OTP must be exactly 6 digits").regex(/^\d{6}$/, "OTP must contain only numbers"),
})

export const verifyForgotPasswordOtpDTO = z.object({
  email: z.string().email().nonempty("Email is required"),
  otp: z.string().length(5, "OTP must be exactly 5 characters").nonempty("OTP is required"),
})


export const changePasswordDTO = z.object({
  password: z.string().regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    "Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character"),
  confirmPassword: z.string().nonempty("Confirm password is required"),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
})



