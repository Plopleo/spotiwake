import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Storage } from '@ionic/storage';


@IonicPage()
@Component({
    selector: 'page-add-alarm',
    templateUrl: 'add-alarm.html',
})
export class AddAlarmPage {
    myForm:FormGroup;
    storage:Storage;
    private myData:any;

    constructor(public navCtrl:NavController, public navParams:NavParams, private builder: FormBuilder, storage: Storage) {
        this.storage = storage;
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
        console.log('Form data is ', formData);
        this.myData = formData;

        this.storage.ready().then(() => {

            this.storage.get('alarms').then((val) => {
                console.log(val);
                //val.push(JSON.stringify(formData));
                //this.storage.set('alarms', val);
            });
            console.log('Data saved : ', this.storage.get('alarms'));
        });
    }

}
