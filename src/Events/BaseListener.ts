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


 abstract  OnMessage(msg:BaseListenerEvents["msg"], channel:Channel):void ;
 async assertExchange(): Promise<string> {
      

    await this.channel.assertExchange(this.exchangeName , this.exchangeType , {durable:false}); 

   const queue = await this.channel.assertQueue("" , {exclusive:true}); 

  await  this.channel.bindQueue(queue.queue , this.exchangeName , this.routingKey );

  return queue.queue

 }


 async listen(){

     const queueName =  await this.assertExchange(); 

       this.channel.consume(queueName , (msg:BaseListenerEvents["msg"])=>{

            this.OnMessage(msg , this.channel)
       })

  }


}

export default  BaseListener;