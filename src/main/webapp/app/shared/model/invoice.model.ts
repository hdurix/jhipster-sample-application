import { Moment } from 'moment';
import { IShipment } from 'app/shared/model//shipment.model';

export interface IInvoice {
    id?: number;
    code?: string;
    date?: Moment;
    details?: string;
    shipments?: IShipment[];
}

export class Invoice implements IInvoice {
    constructor(public id?: number, public code?: string, public date?: Moment, public details?: string, public shipments?: IShipment[]) {}
}
