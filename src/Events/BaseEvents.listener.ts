import { RoutingKeys } from "./RoutingKeys";


export interface BaseEvents {
  routingKey: RoutingKeys;
  msg: any;
}
