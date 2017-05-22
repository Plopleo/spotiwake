import { Component } from '@angular/core';
import { NavController, Events } from 'ionic-angular';
import { AddAlarmPage } from '../add-alarm/add-alarm';
import { Storage } from '@ionic/storage';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {
    addAlarmPage = AddAlarmPage;
    alarms = [];
    storage:Storage;

    constructor(public navCtrl:NavController, storage: Storage, public events:Events) {
        this.storage = storage;

        this.storage.ready().then(() => {
            //this.storage.clear()

            this.storage.get('alarms').then((val) => {
                if (this.isStorageDataValidAndNotEmpty(val)) {
                    this.alarms = JSON.parse(val);
                }
            });
        });

        this.events.subscribe('alarm:added', (data) => {
            this.storage.get('alarms').then((val) => {
                if (this.isStorageDataValidAndNotEmpty(val)) {
                    this.alarms = JSON.parse(val);
                }
            });
        });

    }

    //TODO généraliser cette fct pour pouvoir l'appeller ailleur
    isStorageDataValidAndNotEmpty(data) {
        if(data === null || data === undefined){
            return false;
        }

        try {
            JSON.parse(data);
        } catch (e) {
            return false;
        }
        return true;
    }

}
