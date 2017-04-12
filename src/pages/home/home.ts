import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AddAlarm } from '../add-alarm/add-alarm';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {
    addAlarm = AddAlarm;

    constructor(public navCtrl:NavController) {

    }

}
