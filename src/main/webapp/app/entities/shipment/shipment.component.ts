import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { IShipment } from 'app/shared/model/shipment.model';
import { Principal } from 'app/core';
import { ShipmentService } from './shipment.service';

@Component({
    selector: 'jhi-shipment',
    templateUrl: './shipment.component.html'
})
export class ShipmentComponent implements OnInit, OnDestroy {
    shipments: IShipment[];
    currentAccount: any;
    eventSubscriber: Subscription;

    constructor(
        private shipmentService: ShipmentService,
        private jhiAlertService: JhiAlertService,
        private eventManager: JhiEventManager,
        private principal: Principal
    ) {}

    loadAll() {
        this.shipmentService.query().subscribe(
            (res: HttpResponse<IShipment[]>) => {
                this.shipments = res.body;
            },
            (res: HttpErrorResponse) => this.onError(res.message)
        );
    }

    ngOnInit() {
        this.loadAll();
        this.principal.identity().then(account => {
            this.currentAccount = account;
        });
        this.registerChangeInShipments();
    }

    ngOnDestroy() {
        this.eventManager.destroy(this.eventSubscriber);
    }

    trackId(index: number, item: IShipment) {
        return item.id;
    }

    registerChangeInShipments() {
        this.eventSubscriber = this.eventManager.subscribe('shipmentListModification', response => this.loadAll());
    }

    private onError(errorMessage: string) {
        this.jhiAlertService.error(errorMessage, null, null);
    }
}
