export interface ICreateOTP {
  userId : string
  otp  : string
  purpose   : "FORGOT_PASSWORD" | "RESET_PASSWORD"
  expiresAt : Date
}