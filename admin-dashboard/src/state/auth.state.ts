import type { IUserDetails } from '@/types/user.types'
import {create} from 'zustand'

interface IAuthState  {
  userDetails : IUserDetails
} 

export const useAuthStore = create<IAuthState>((set) => ({
  userDetails : {
        id: "",
        email:"" ,
        name: "",
        phone : "",
        role: "ADMIN",
        createdAt: new Date(),
        image: "" 
  }
}))