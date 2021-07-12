import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SMS } from '@ionic-native/sms';


@IonicPage()
@Component({
  selector: 'page-estilizacao',
  templateUrl: 'estilizacao.html',
})
export class EstilizacaoPage {

  private enviado: boolean = false;
  constructor(private sms: SMS) { }


  ionViewDidLoad() {
  }

  enviarMensagem(){
    this.sms.send('44988167913', 'Hello world!');
    this.enviado = true;
  }

}
