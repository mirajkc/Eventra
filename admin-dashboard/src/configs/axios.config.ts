import axios from 'axios'
import Cookies from 'js-cookie'

const axiosInstance =  axios.create({
  baseURL : import.meta.env.VITE_APP_API_BASE_URL,
  withCredentials : true,
   timeout: 100000,
})

axiosInstance.interceptors.request.use((config) => {
  const accessToken = Cookies.get('accessToken')
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`
  }
  return config
}, (error) => Promise.reject(error))

export default axiosInstance