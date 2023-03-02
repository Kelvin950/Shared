import jwt from 'jsonwebtoken';
import  {NextFunction, Request , Response}  from 'express'
import  {AuthError} from './AuthError'
import { json } from 'stream/consumers';
import  {Payload} from '../interfaces/Payload.interface'



declare global{
     
    namespace Express{

     interface Request{
            user?: Payload
        }
    }
}

export function isAuth(req:Request , res:Response ,next:NextFunction){


             
    // const [_, token] =  req.headers["authorization"]?.split(" ")!;
    if(!req.headers["authorization"])   throw new AuthError("You are not authenticated" , 403) ; 

   const [_, token] =  req.headers["authorization"]?.split(" ");
         
        if(!token){
             
            throw new AuthError("You are not authenticated" , 403) ;
           

        }
      
        let payload:Payload ; 

        try {
              
        payload =  jwt.verify(token , process.env.JWT_KEY!) as Payload; 
             
          
        req.user =  payload;
        


        } catch (error) {

            throw new AuthError("You are not authenticated" , 403)
            
        }

        next()

}