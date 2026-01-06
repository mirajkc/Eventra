import cloudinary from "../config/connect.cloudinary.config.ts";
import streamifier from "streamifier";
export default function uploadImages (
  buffer : Buffer,
  folder : string
):Promise<any>{
  return new Promise((resolve, reject)=>{
    const stream = cloudinary.uploader.upload_stream({
      folder : folder, 
      resource_type : "image"
    },
    (err, result) =>{
      if(err) return reject(err);
      resolve(result)
    }
  )
  streamifier.createReadStream(buffer).pipe(stream)
  })
}