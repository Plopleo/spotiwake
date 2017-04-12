import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddAlarmPage } from './add-alarm';

@NgModule({
  declarations: [
    AddAlarmPage,
  ],
  imports: [
    IonicPageModule.forChild(AddAlarmPage),
  ],
  exports: [
    AddAlarmPage
  ]
})
export class AddAlarmModule {}
