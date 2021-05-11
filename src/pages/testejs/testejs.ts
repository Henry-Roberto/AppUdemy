import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ArgumentOutOfRangeError } from 'rxjs';

@IonicPage()
@Component({
  selector: 'testejs-botoes',
  templateUrl: 'testejs.html',
})
export class TesteJS {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  private agora = new Date();
  private agoraconvertido = this.agora.toLocaleDateString("pt-BR")
  ionViewDidLoad() {
    console.log('ionViewDidLoad TesteJS');
  }

}
