import  {NextFunction, Request , Response,} from 'express'
import ParentError from "../utils/ErrorClass";
export const errorHandler = (error:any ,req:Request , res:Response, next:NextFunction)=>{
      
    if(error instanceof ParentError){

        console.log(error);
        return res.status(error.code).send(error.serialize());
    }
 
console.log(error)
    res.status(500).send({
        statusCode:500 , message:"Internal server Error"
    }) ;


}