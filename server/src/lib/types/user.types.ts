export interface IRegisterTypes {
  name? : string,
  email : string,
  password : string,
  confirmPassword?: string
  role? :   "ADMIN" | 'CUSTOMER'
}

export interface IUserLogin{
  email : string,
  password : string
}

export interface IUserDetails {
    id: string;
    email: string;
    name: string;
    phone?: string ;
    password: string ;
    role: "CUSTOMER" | "ADMIN";
    createdAt: Date;
    updatedAt?: Date;
    image?: string ;
}