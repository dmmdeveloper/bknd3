import mongoose from "mongoose";
import bcrypt from "bcrypt";


const userSchema = new mongoose.Schema( { 
    name:{
        type:String , 
        trim : true ,
        lowercase: true
    },
    email:{
        type:String , 
        trim : true ,
    },
    password:{
        type:String , 
    },
} , {timestamps:true })



userSchema.pre("save" , async function (next) {
if( !this.isModified("password") ) return next() ;
this.password = await bcrypt.hash(this.password , 10);
next();
})


export const User = mongoose.model("User" , userSchema)