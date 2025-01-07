export class APIREsponse {
    constructor(message= "Success !!" , data = {} , statuscode= 201 ) {
        this.message = message ;
        this.data = data ;
        this.statuscode  = statuscode       
    }
}


export const  Response = (res , message ,  statuscode)=>{

    res.status(statuscode)
    .json(
        new APIREsponse(message , null, statuscode)
    )
 
}