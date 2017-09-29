import { Component, ViewChild } from '@angular/core';
import { Events, MenuController, NavController, PopoverController } from 'ionic-angular';
import { IncomingService } from '../../core/incoming.service';
import { Api } from '../../core/api.service';
import { ActionService } from '../../core/action.service';
import { BaseListComponent } from './list.base.component';
import { PermissionService } from '../../core/permissions.service';

@Component({
    selector: 'page-list',
    templateUrl: 'list.html'
})
export class IncomingPage extends BaseListComponent {

    @ViewChild('list') list: any;

    constructor(
        public navCtrl: NavController,
        public listService: IncomingService,
        public api: Api,
        public menu: MenuController,
        public events: Events,
        public popoverCtrl: PopoverController,
        public actionService: ActionService,
        public incomingService: IncomingService,
        public permissionService: PermissionService
    ) {
        super(navCtrl, listService, api, menu, events, popoverCtrl, actionService, permissionService);
        this.messageType = 'Incoming';
    }

    ionViewDidEnter() {
        this.actionService.type = 'incomingMessages';
    }

}