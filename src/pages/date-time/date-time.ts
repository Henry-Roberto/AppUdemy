import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-date-time',
  templateUrl: 'date-time.html',
})

export class DateTimePage {
  event: any = {
    month: '2018-01-06',
    timeStarts: '07:43',
    timeEnds: "2018-01-07"
  }

  private data: any = [];

  private mesAabrir: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    for (let i = 0; i < 30; i++) {
      this.data[i] = {
        ano: 2000 + i,
        meses: [
          "JAN",
          "FEV",
          "MAR",
          "ABR",
          "MAI",
          "JUN",
          "JUL",
          "AGO",
          "SET",
          "OUT",
          "NOV",
          "DEZ"
        ],
        show: false
      }
    }
  }

  abrirAno(index) {
    if (!this.data[index].show) {
      this.data[index].show = true;
    } else {
      this.data[index].show = false;
    }
  }

  ClickMesAno(Ano, Mes){
    console.log(Ano, Mes);
  }

}
