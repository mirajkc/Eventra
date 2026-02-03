import type { IUserDetails } from '@/types/user.types'
import {create} from 'zustand'
import Cookies from 'js-cookie'
import axiosInstance from '@/configs/axios.config'
interface IAuthState  {
  userDetails : IUserDetails,
  getLoggedInUserDetails : () => Promise<void>,
  isUserLoggedIn: boolean,
  setIsUserLoggedIn : (value: boolean) => void
} 

export const useAuthStore = create<IAuthState>((set) => ({
  userDetails : {
        id: "",
        email:"" ,
        name: "",
        phone : "",
        role: "ADMIN",
        createdAt: new Date(),
        image: "" ,
  },
  isUserLoggedIn: false,
  getLoggedInUserDetails: async() => {
    try {
      const accessToken = Cookies.get('accessToken')
      if(!accessToken){
        throw "access token not found"
      }
      const response = await axiosInstance.get('/user/me', {
        headers : {
          Authorization : `Bearer ${accessToken}`
        }
      })
      set({
        userDetails : response.data.data
      })
    } catch (error:any) {
      if(error.response.data.message){
        console.log(error.response.data.message);
        return
      }
      console.log(error.message);
    }
  },
  setIsUserLoggedIn: (value: boolean) => {
    set({
      isUserLoggedIn: value
    })
  }
}))