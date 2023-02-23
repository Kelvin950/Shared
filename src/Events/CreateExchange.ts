import  {RoutingKeys} from './RoutingKeys'
import {Channel} from 'amqplib'
 
interface CreateExchangeEvent{
    routingKeys:RoutingKeys ;
    
}

abstract class CreateExchange<T extends CreateExchangeEvent>{

 private Channel ; 

 private exchangeName = "Topic_Exchange" ;
 private exchangeType ="topic"; 

 abstract  routingKey:T["routingKeys"]

 constructor(channel:Channel){

        this.Channel=channel;
 }

 abstract  assertExchange():Promise<void>
 
 



}

export default CreateExchange;