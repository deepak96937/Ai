// cloudinary.js
import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';


const uploadOnCloudinary = async (filePath) => {
    cloudinary.config({
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET
    });

    try {
        const uploadResult = await cloudinary.uploader
            .upload(
                filePath, {
                public_id: 'shoes',
            }
            )
            .catch((error) => {
                console.log(error);
            });

        console.log(uploadResult);
        fs.unlinkSync(filePath); // Delete the file after upload
        return uploadResult.secure_url; // Return the secure URL of the uploaded image
    } catch (error) {
        fs.unlinkSync(filePath)
       return res.status(500).json({message:"cloudinary upload failed"})
    }
};

export default uploadOnCloudinary;
