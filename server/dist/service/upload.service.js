import { Readable } from "node:stream";
import { v2 as cloudinary } from 'cloudinary';
import enviroment from "../config/enviroment.config.js";
cloudinary.config({
    cloud_name: enviroment.cloudinaryKeys.cloudName || "",
    api_key: enviroment.cloudinaryKeys.apiKey || "",
    api_secret: enviroment.cloudinaryKeys.apiSecret || "",
});
export function uploadImage(buffer, folderName) {
    return new Promise((resolve, reject) => {
        const uploadStream = cloudinary.uploader.upload_stream({
            folder: folderName,
            resource_type: "image"
        }, (error, result) => {
            if (error)
                return reject(error);
            if (!result?.secure_url) {
                return reject(new Error("Cloudinary upload failed"));
            }
            resolve(result.secure_url);
        });
        Readable.from(buffer).pipe(uploadStream);
    });
}
//# sourceMappingURL=upload.service.js.map