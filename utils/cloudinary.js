import {v2 as cloudinary} from "cloudinary";
import dotenv from "dotenv";
dotenv.config();
import fs from "fs"

cloudinary.config({
    cloud_name:process.env.CLOUD_NAME,
    api_key:process.env.API_KEY,
    api_secret:process.env.API_SECRET
});



const cloudinaryData =async (localFilePath)=>{
    try {
        if (!localFilePath) return null

        const cloudinaryResponse = await cloudinary.uploader.upload(localFilePath, {
            resource_type:"auto",
            folder:"jobportal"
        })
    
        fs.unlinkSync(localFilePath)
        return cloudinaryResponse
        
    } catch (error) {
        fs.unlinkSync(localFilePath)
        return
        console.log(error);
        
        
    }

    
}

export default cloudinaryData