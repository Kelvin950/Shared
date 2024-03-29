import {BaseEvents} from './BaseEvents.listener'
import { RoutingKeys } from './RoutingKeys'

export interface productCreatedEvent extends BaseEvents{
      
     RoutingKeys:RoutingKeys.productCreated  ; 
    msg: {
         id?:string
          name:string ;
          storeId:string ;
          price:number ;
          version:number
          description:string
    }

}