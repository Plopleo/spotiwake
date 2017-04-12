import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AddAlarmPage } from '../add-alarm/add-alarm';
import { Storage } from '@ionic/storage';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {
    addAlarmPage = AddAlarmPage;
    alarms = [];

    constructor(public navCtrl:NavController, storage: Storage) {

    }

}
