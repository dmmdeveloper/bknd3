import { User } from "../models/user.model.js";
import { APIError } from "../utils/apierror.utils.js";
import { APIREsponse, Response } from "../utils/apiresponse.utils.js";
import { asyncHandler } from "../utils/asynchandler.utils.js";
import { uploadOnCloudinary } from "../utils/uploadOnCloudinary.utils.js";

const Register = asyncHandler( async (req , res)=>{    
    console.log(req.url);

// get Data
// empty validation
// findUser in DB;
// create a user
// return res
const {name , email ,password } = req.body ;
console.log(name, email , password);

const requiredFields = [ "name" , "email" , "password"]
for(let field of requiredFields){
    if(!req.body[field]){
        Response(res, `${field} is Required  :))` , 400 )
        throw new APIError(`${field} is Required :))`  , 400)
    }
}


const findUser =  await User.findOne({email})
if(findUser){
    Response(res, `User Already Registered ` , 400 )

    throw new APIError(`User Already Registred :)` , 400)
}

const createUser = await User.create({name , email , password})
console.log(createUser);

    res.status(200)
    .json(
        new APIREsponse("User Regiered success Fully !!" , createUser , 200 )
    )
} )

const file = asyncHandler( async (req , res) =>{
    console.log(req.url);
    const file = req.file.path

console.log(file);

const  fileURL = await uploadOnCloudinary(file)
console.log( "URL : ", fileURL);





    res
    .status(200)
    .json(
        new APIREsponse("File Uploaded Success Fully !!!", fileURL  , 200)
    )
    
})


const params = asyncHandler(async(req,res)=>{
    console.log(req.url);
console.log(req.params);


    res
    .status(200)
    .json(
        new APIREsponse("params Fetched Success !!" ,req.params, 200)
    )
    
} )


const cookie  = asyncHandler ( async (req,res ) =>{
    console.log(req.url);
console.log(req.cookie);
res
.status(200)
.json( 
    new APIREsponse("Cookies Good Working - Fetched (-:-) ;" , req.cookie , 200  )
   )
})

const setCookie = asyncHandler ( (req,res) =>{
    
    res.status(200)
    .cookie("cookie" , "786_110_ Masha Allah"  , { httpOnly  :true , secure : true} )
    .json( new APIREsponse("Cookies Seted ", {} , 200))

} ) 


export { Register ,file  ,params  ,cookie  ,setCookie }