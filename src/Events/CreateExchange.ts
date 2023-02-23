import  {RoutingKeys} from './RoutingKeys'
import {Channel} from 'amqplib'
 
export interface CreateExchangeEvent{
    routingKeys:RoutingKeys ;
    
}

abstract class CreateExchange<T extends CreateExchangeEvent>{

 protected Channel ; 

protected exchangeName = "Topic_Exchange" ;
protected exchangeType ="topic"; 

 abstract  routingKey:T["routingKeys"]

 constructor(channel:Channel){

        this.Channel=channel;
 }

 abstract  assertExchange():Promise<void>
 
 



}

export default CreateExchange;