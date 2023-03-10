import {Channel} from 'amqplib';
import   CreateExchange  from './CreateExchange';
import { RoutingKeys } from './RoutingKeys';
import { BaseEvents } from "./BaseEvents.listener";




export abstract class BasePublisher<T extends  BaseEvents> extends CreateExchange{
 
 private channel;

  abstract routingKey:T["routingKey"];
    constructor(channel:Channel){
           super();
 this.channel = channel;
    }
  



 async assertExchange(): Promise<void> {
    
    await this.channel.assertExchange(this.exchangeName , this.exchangeType , {durable:false});

}

async Publish(msg:T["msg"]){
  
    await this.assertExchange();
    this.channel.publish(this.exchangeName , this.routingKey, Buffer.from(JSON.stringify(msg)));

     
}

}