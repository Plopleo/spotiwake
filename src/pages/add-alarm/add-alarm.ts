import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Storage } from '@ionic/storage';
import { AlarmModel } from '../../models/alarm-model';
import { SearchMusicPage } from '../search-music/search-music';



@IonicPage()
@Component({
    selector: 'page-add-alarm',
    templateUrl: 'add-alarm.html',
})
export class AddAlarmPage {
    searchMusicPage = SearchMusicPage;
    myForm:FormGroup;
    storage:Storage;

    constructor(public navCtrl:NavController, public navParams:NavParams, private builder:FormBuilder, storage:Storage) {
        this.storage = storage;

        //this.storage.clear();

        this.myForm = builder.group({
            'time': '08:30',
            'monday': false,
            'tuesday': false,
            'wednesday': false,
            'thursday': false,
            'friday': false,
            'saturday': false,
            'sunday': false
        })
    }

    onSubmit(formData) {
        console.log('submit!');
        this.storage.ready().then(() => {

            this.storage.get('alarms').then((val) => {
                var val = this.isStorageDataValidAndNotEmpty(val) ? JSON.parse(val) : [];

                var days = [];
                if(formData.monday){
                    days.push('monday');
                }
                if(formData.tuesday){
                    days.push('tuesday');
                }
                if(formData.wednesday){
                    days.push('wednesday');
                }
                if(formData.thursday){
                    days.push('thursday');
                }
                if(formData.friday){
                    days.push('friday');
                }
                if(formData.saturday){
                    days.push('saturday');
                }
                if(formData.sunday){
                    days.push('sunday');
                }

                var alarm = new AlarmModel(formData.time, days);

                val.push(alarm);
                this.storage.set('alarms', JSON.stringify(val));
            });
        });
    }

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
