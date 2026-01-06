import {v2 as cloudinary } from 'cloudinary'
import enviroment from './enviroment.config.ts';
cloudinary.config({
  cloud_name : String(enviroment.cloudinaryKeys.cloudName),
  api_key : String(enviroment.cloudinaryKeys.apiKey),
  api_secret : String(enviroment.cloudinaryKeys.apiKey)
})
export default cloudinary
  