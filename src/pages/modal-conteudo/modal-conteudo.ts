import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-modal-conteudo',
  templateUrl: 'modal-conteudo.html',
})
export class ModalConteudoPage {

  usuarios : any = [{ 
    nome: "", 
    idade: 0 
  }];

  constructor(public navParams: NavParams, 
              public viewCtrl: ViewController) {
    this.usuarios = this.navParams.get("usuarios");
    console.log(this.usuarios);
  }


  fecharModal(){
    this.viewCtrl.dismiss();
  }

  FecharModalComParametros() {
    let param = "Henry R";

    this.viewCtrl.dismiss(param);

  }


}
