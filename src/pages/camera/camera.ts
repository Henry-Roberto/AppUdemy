import { Component } from '@angular/core';
import { IonicPage, ToastController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';

@IonicPage()
@Component({
  selector: 'page-camera',
  templateUrl: 'camera.html',
})
export class CameraPage {
  private foto: any;
  constructor(
              private toastCtrl: ToastController) { }

  ionViewDidLoad() {
  }

  tirarFoto(){
    // const options: CameraOptions = {
    //   quality: 100,
    //   destinationType: this.camera.DestinationType.DATA_URL,
    //   encodingType: this.camera.EncodingType.JPEG,
    //   mediaType: this.camera.MediaType.PICTURE
    // }

    // this.camera.getPicture(options).then((imageData) => {
    //   debugger;
    //   let base64Image = 'data:image/jpeg;base64,' + imageData

    //   this.foto = base64Image;
    // },(err) => {
    //   this.toastCtrl.create({
    //     message : 'Não foi possivel tirar a foto',
    //     duration : 2000,
    //     position : 'top'
    //   }).present();
    // });
  }

}
