import  {RoutingKeys} from './RoutingKeys'
import {Channel} from 'amqplib'
 
export interface CreateExchangeEvent{
    routingKeys:RoutingKeys ;
    
}

abstract class CreateExchange<T extends CreateExchangeEvent>{


protected exchangeName = "Topic_Exchange" ;
protected exchangeType ="topic"; 

 abstract  routingKey:T["routingKeys"]



 abstract  assertExchange():Promise<void>
       
 



}

export default CreateExchange;