import {v2 as cloudinary} from "cloudinary";
import dotenv from "dotenv"
import { unlinkSync} from "node:fs"


// Cloudianry Configuration 

dotenv.config({path:".env"})

cloudinary.config({
    cloud_name:"dtqli9uge",
    api_key:"445545137513154",
    api_secret : "e7vlmObww4ZrF-24HkdfvwTjkxY"
})



export const uploadOnCloudinary = async (filePath)=>{

    if( !filePath ) return ;
try {
const response = await cloudinary.uploader.upload(filePath)
unlinkSync(filePath)

return response.url

} catch (error) {
    console.log("File not Uploaded On Cloudinary !!!" , error);
unlinkSync(filePath)

    return null;   
}



}