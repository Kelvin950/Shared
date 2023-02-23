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


 abstract  OnMessage:void ;
 async assertExchange(): Promise<void> {
      

    await this.channel.assertExchange(this.exchangeName , this.exchangeType , {durable:false}); 

   const queue = await this.channel.assertQueue("" , {exclusive:true}); 

    this.channel.bindQueue(queue.queue , this.exchangeName , this.routingKey );


 }


  listen()


}