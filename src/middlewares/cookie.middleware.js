import { asyncHandler } from "../utils/asynchandler.utils.js";


export const acceeCookie = asyncHandler( async (req ,res , next) =>{

// console.log(req.cookies);

req.cookie = req?.cookies?.cookie

    next();

});