import { Moment } from 'moment';
import { IOrderItem } from 'app/shared/model//order-item.model';

export interface IProductOrder {
    id?: number;
    placedDate?: Moment;
    code?: string;
    orderItems?: IOrderItem[];
}

export class ProductOrder implements IProductOrder {
    constructor(public id?: number, public placedDate?: Moment, public code?: string, public orderItems?: IOrderItem[]) {}
}
