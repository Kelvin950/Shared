import {Channel} from 'amqplib';
import   CreateExchange , {CreateExchangeEvent} from './CreateExchange';


interface BasePublisherEvents extends CreateExchangeEvent{

    msg:any

}

abstract class BasePublisher extends CreateExchange<BasePublisherEvents>{
 
 
  
   


 async assertExchange(): Promise<void> {
    
    await this.Channel.assertExchange(this.exchangeName , this.exchangeType , {durable:false});

}

async Publish(msg:BasePublisherEvents["msg"]){
  
    await this.assertExchange();
    this.Channel.publish(this.exchangeName , this.routingKey, Buffer.from(JSON.stringify(msg)));

     
}

}