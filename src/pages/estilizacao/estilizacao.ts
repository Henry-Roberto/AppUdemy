import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { SMS } from '@ionic-native/sms';


@IonicPage()
@Component({
  selector: 'page-estilizacao',
  templateUrl: 'estilizacao.html',
})
export class EstilizacaoPage {

  enviado: boolean = false;
  constructor(private sms: SMS) { }


  ionViewDidLoad() {
  }

  enviarMensagem(){
    this.sms.send('44988167913', 'Hello world!');
    this.enviado = true;
  }

}
