import  {RoutingKeys} from './RoutingKeys'
import {Channel} from 'amqplib'
 

abstract class CreateExchange{


protected exchangeName = "Topic_Exchange" ;
protected exchangeType ="topic"; 





 abstract  assertExchange():Promise<void|string> 
       
 



}

export default CreateExchange;