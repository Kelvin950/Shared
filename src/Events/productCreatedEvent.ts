import {BaseEvents} from './BaseEvents.listener'
import { RoutingKeys } from './RoutingKeys'

export interface productCreatedEvent extends BaseEvents{
      
     RoutingKeys:RoutingKeys.productCreated  ; 
    msg: {
         
          name:string ;
          storeId:string ;
          price:string ;
          description:string
    }

}