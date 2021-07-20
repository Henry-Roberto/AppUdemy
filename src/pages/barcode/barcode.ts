import { ToastController, IonicPage } from 'ionic-angular';
import { Component } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

@IonicPage()
@Component({
  selector: 'page-barcode',
  templateUrl: 'barcode.html',
})
export class BarcodePage {
  codBarra: String;

  constructor(private barcodeScanner : BarcodeScanner, 
              private toastCtrl: ToastController) {
  }



  scanearProduto(){
    this.barcodeScanner.scan().then(barcodeData => {
      let response : string = JSON.stringify(barcodeData);
      this.codBarra = response;
      this.toastCtrl.create({
        message : response,
        duration : 2000,
        position : 'top'
      }).present();}).catch(err => {
        let response : string = JSON.stringify(err);

      this.toastCtrl.create({
        message : response,
        duration : 2000,
        position : 'top'
      }).present();});
  }

}
