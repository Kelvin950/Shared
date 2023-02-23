import {BaseEvents} from  './BaseEvents.listener';
import {RoutingKeys} from './RoutingKeys'
export interface AuthEvent extends BaseEvents{
 
    routingKey:RoutingKeys.Auth
    msg:{
        id:number ;
        email:number;
    }

}