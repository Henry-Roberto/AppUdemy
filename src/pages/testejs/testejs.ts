import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'testejs-botoes',
  templateUrl: 'testejs.html',
})
export class TesteJS {

  agora = new Date();
  agoraconvertido = this.agora.toLocaleDateString("pt-BR")

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TesteJS');
  }

}
