import { Channel } from "amqplib";
import CreateExchange from "./CreateExchange";
 import {RoutingKeys} from './RoutingKeys';

interface  BaseListenerEvents{

  routingKey:RoutingKeys
    msg:any
 

}

 
export abstract class BaseListener<T extends BaseListenerEvents> extends CreateExchange{

    private channel;

    abstract  routingKey:T["routingKey"];

 constructor(channel:Channel){
    super();

    this.channel = channel;
 }


 abstract  OnMessage(msg:BaseListenerEvents["msg"], channel:Channel):void ;
 async assertExchange(): Promise<string> {
      

    await this.channel.assertExchange(this.exchangeName , this.exchangeType , {durable:false}); 

   const queue = await this.channel.assertQueue("" , {exclusive:true}); 

  await  this.channel.bindQueue(queue.queue , this.exchangeName , this.routingKey );

  return queue.queue

 }


 async listen(){

     const queueName =  await this.assertExchange(); 

       this.channel.consume(queueName , (msg:T["msg"])=>{

            this.OnMessage(msg , this.channel)
       })

  }


}

