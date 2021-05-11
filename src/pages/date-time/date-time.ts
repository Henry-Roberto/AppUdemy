import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-date-time',
  templateUrl: 'date-time.html',
})

export class DateTimePage {
  event : any = {
    month: '2018-01-06',
    timeStarts: '07:43',
    timeEnds: "2018-01-07"
  }
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
  }

}
