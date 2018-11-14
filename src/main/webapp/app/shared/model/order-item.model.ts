import { IProduct } from 'app/shared/model//product.model';
import { IProductOrder } from 'app/shared/model//product-order.model';

export interface IOrderItem {
    id?: number;
    quantity?: number;
    totalPrice?: number;
    product?: IProduct;
    order?: IProductOrder;
}

export class OrderItem implements IOrderItem {
    constructor(
        public id?: number,
        public quantity?: number,
        public totalPrice?: number,
        public product?: IProduct,
        public order?: IProductOrder
    ) {}
}
