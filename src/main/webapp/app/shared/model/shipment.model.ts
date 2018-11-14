import { Moment } from 'moment';
import { IInvoice } from 'app/shared/model//invoice.model';

export interface IShipment {
    id?: number;
    trackingCode?: string;
    date?: Moment;
    invoice?: IInvoice;
}

export class Shipment implements IShipment {
    constructor(public id?: number, public trackingCode?: string, public date?: Moment, public invoice?: IInvoice) {}
}
