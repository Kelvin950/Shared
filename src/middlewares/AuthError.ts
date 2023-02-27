import { error } from '@utils/error.interface';
import {ParentError} from '../utils/ErrorClass';


export class AuthError extends  ParentError{


          constructor(public  msg:string , public code:number){

            super(msg , code) ; 

            Object.setPrototypeOf(this , AuthError)
          }   


    public serialize(): error {
      return {
        message: this.message,
        statusCode: this.code
      };

    }



}