import {BaseEvents} from './BaseEvents.listener' ;
import {RoutingKeys} from './RoutingKeys'
export interface  storeCreatedEvent extends BaseEvents{
     
      routingKey:RoutingKeys.storeCreated ;
      msg:{
         name:string ; 
         userId:string ;

      }
     

      

}