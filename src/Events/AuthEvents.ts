import {BaseEvents} from  './BaseEvents.listener';
import {RoutingKeys} from './RoutingKeys'
export interface AuthEvent extends BaseEvents{
 
    routingKey:RoutingKeys.auth
    msg:{
        id:string ;
        name:string;
    }

}