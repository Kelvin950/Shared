import { error } from "../utils/error.interface";
import {ParentError} from "../utils/ErrorClass";


export class BadInputError extends  ParentError{

      
     constructor(public message:string , public code:number){
        super(message , code) ; 
        Object.setPrototypeOf(this, BadInputError.prototype);
     }


     public serialize(): error {
         
        return {
            message:this.message ,
            statusCode:this.code
        }
     }

}

