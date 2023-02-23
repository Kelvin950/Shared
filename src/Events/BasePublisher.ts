import {Channel} from 'amqplib';
import   CreateExchange , {CreateExchangeEvent} from './CreateExchange';


interface BasePublisherEvents extends CreateExchangeEvent{

    msg:any

}

export abstract class BasePublisher extends CreateExchange<BasePublisherEvents>{
 
 private channel:Channel;


    constructor(channel:Channel){
           super();
 this.channel = channel;
    }
  
   


 async assertExchange(): Promise<void> {
    
    await this.channel.assertExchange(this.exchangeName , this.exchangeType , {durable:false});

}

async Publish(msg:BasePublisherEvents["msg"]){
  
    await this.assertExchange();
    this.channel.publish(this.exchangeName , this.routingKey, Buffer.from(JSON.stringify(msg)));

     
}

}