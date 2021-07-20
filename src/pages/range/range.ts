import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-range',
  templateUrl: 'range.html',
})
export class RangePage {

  brilhoDaTela : number = 100;
  taxa : number = 100;
  faixaEtaria: any = {
    lower : 16,
    upper : 60
  };

  constructor() {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RangePage');
  }

}
