import { Component } from '@angular/core';
import { IonicPage, ToastController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-toast',
  templateUrl: 'toast.html',
})
export class ToastPage {

  constructor(public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
  }

  showToast(position : string) {
    this.toastCtrl.create({
      message : 'Dados salvos com sucesso!',
      duration: 2000,
      position: position
    }).present();
  };

  showLongToast() {
    this.toastCtrl.create({
      message  : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse voluptatem iste placeat dignissimos maxime, iure laborum velit pariatur! Et delectus exercitationem commodi accusamus ex eos dolor similique unde quidem eius?',
      duration : 2000,
      position : 'top' 
    }).present();
  };
  
  showToastWithCloseButton() {
    this.toastCtrl.create({
      message : 'Operação realizada com sucesso!',
      showCloseButton : true,
      closeButtonText : 'OK',
      position : 'top'
    }).present();
  }

}
