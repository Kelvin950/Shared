import { Channel } from "amqplib";
import CreateExchange, { CreateExchangeEvent } from "./CreateExchange";
 

interface  BaseListenerEvents extends CreateExchangeEvent{

    msg:any
 

}

 
abstract class BaseListener extends CreateExchange<BaseListenerEvents>{

    private channel;

 constructor(channel:Channel){
    super();

    this.channel = channel;
 }


 abstract 
 async assertExchange(): Promise<void> {
     

 }


}