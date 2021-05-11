import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-modal-conteudo',
  templateUrl: 'modal-conteudo.html',
})
export class ModalConteudoPage {

  private usuarios : any = [{ 
    nome: "", 
    idade: 0 
  }];

  constructor(public navParams: NavParams) {
    this.usuarios = this.navParams.get("usuarios");
    console.log(this.usuarios);
    
  }
  


}
