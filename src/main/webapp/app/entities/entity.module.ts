import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { JhipsterSampleApplicationCustomerModule } from './customer/customer.module';
import { JhipsterSampleApplicationProductModule } from './product/product.module';
import { JhipsterSampleApplicationProductOrderModule } from './product-order/product-order.module';
import { JhipsterSampleApplicationOrderItemModule } from './order-item/order-item.module';
import { JhipsterSampleApplicationInvoiceModule } from './invoice/invoice.module';
import { JhipsterSampleApplicationShipmentModule } from './shipment/shipment.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    // prettier-ignore
    imports: [
        JhipsterSampleApplicationCustomerModule,
        JhipsterSampleApplicationProductModule,
        JhipsterSampleApplicationProductOrderModule,
        JhipsterSampleApplicationOrderItemModule,
        JhipsterSampleApplicationInvoiceModule,
        JhipsterSampleApplicationShipmentModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhipsterSampleApplicationEntityModule {}
