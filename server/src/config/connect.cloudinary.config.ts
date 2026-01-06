  import {v2 as cloudinary } from 'cloudinary'
import enviroment from './enviroment.config.ts';
  
  export default function connectCloudinary(){
    try {
      cloudinary.config({
        cloud_name : String(enviroment.cloudinaryKeys.cloudName),
        api_key : String(enviroment.cloudinaryKeys.apiKey),
        api_secret : String(enviroment.cloudinaryKeys.apiKey)
      })
      console.log("====Cloudinary Connected====");
    } catch (error) {
      console.log("Cloudinary connect err" + error);
    }
  }