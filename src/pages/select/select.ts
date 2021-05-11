import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-select',
  templateUrl: 'select.html',
})
export class SelectPage {
  selectOptions: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.selectOptions = {
      title: 'Bandas Brabas',
      subTitle: 'Selecione a Banda mais Braba',
      mode: 'md', //estilo do dispositivo
      
    };
  }

}
