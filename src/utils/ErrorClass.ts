import {error} from '@utils/error.interface'



abstract class ParentError extends Error {
  constructor(public message: string, public code: number) {
    super(message);
      Object.setPrototypeOf(this ,ParentError);
    
  }

  public abstract serialize():error
}


export default ParentError ; 