import app from "./app.js";
import { DBConnection } from "./db/connection.db.js";
import dotenv from "dotenv"
dotenv.config({path:".env"})

const port = process.env.PORT || 3001;

DBConnection()
.then( ()=>{
    app.listen(port , ()=>{
        console.log(`=> app is Running on http://localhost:${port}`);
    } ) 
} )
.catch( (error)=>{
    console.log("ERRON On Index.js" , error);
} )