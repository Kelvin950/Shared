import { BaseEvents } from "./BaseEvents.listener";
import { RoutingKeys } from "./RoutingKeys";

export interface productUpdatedEvent extends BaseEvents {
  RoutingKeys: RoutingKeys.productUpdated;
  msg: {
    id?: string;
    name: string;
    storeId: string;
    price: number;
    version: number;
    description: string;
  };
}
