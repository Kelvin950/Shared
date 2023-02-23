import  {RoutingKeys} from './RoutingKeys'
import {Channel} from 'amqplib'

class CreateExchange<T>{

 private Channel ; 

 private exchangeName = "Topic_Exchange"

 constructor(channel:Channel){

        this.Channel=channel;
 }

 
 



}