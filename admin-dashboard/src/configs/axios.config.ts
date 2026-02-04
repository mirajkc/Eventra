import axios from 'axios'
import Cookies from 'js-cookie'


const accessToken = Cookies.get('accessToken')
const axiosInstance =  axios.create({
  baseURL : import.meta.env.VITE_APP_API_BASE_URL,
  withCredentials : true,
   timeout: 10000,
    headers : {
          Authorization : `Bearer ${accessToken}`
        }
})

export default axiosInstance