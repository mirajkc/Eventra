export interface IRegisterTypes {
  name? : string,
  email : string,
  password : string,
  confirmPassword?: string
  role? :   "ADMIN" | 'CUSTOMER'
}