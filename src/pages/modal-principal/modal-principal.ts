import { ModalConteudoPage } from './../modal-conteudo/modal-conteudo';
import { FabPage } from './../fab/fab';
import { Component } from '@angular/core';
import { IonicPage, ModalController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-modal-principal',
  templateUrl: 'modal-principal.html',
})
export class ModalPrincipalPage {

  private usuarios: any = [{ 
    nome: "", 
    idade: 0 
  }];

  constructor(public modalCtrl: ModalController) {

    let data = new Date('4 17 2021');
    let diaDaSemana = data.getDay();
    console.log(diaDaSemana);
  }

  abrirModalBasico() {
    this.modalCtrl.create(FabPage).present();

  }

  abrirModalParametros() {
    // let param = {usuario: {nome: "Henry", idade: 37}};
    // this.modalCtrl.create(FabPage, param ).present();

    this.usuarios = [
        { nome: "Henry", idade: 22 },
        { nome: "Lobo", idade: 37 },
        { nome: "Chimbinha", idade: 45 },
        { nome: "Henry", idade: 22 },
        { nome: "Lobo", idade: 37 },
        { nome: "Chimbinha", idade: 45 },
        { nome: "Henry", idade: 22 },
        { nome: "Lobo", idade: 37 },
        { nome: "Chimbinha", idade: 45 },
        { nome: "Henry", idade: 22 },
        { nome: "Lobo", idade: 37 },
        { nome: "Chimbinha", idade: 45 },
        { nome: "Henry", idade: 22 },
        { nome: "Lobo", idade: 37 },
        { nome: "Chimbinha", idade: 45 },
        { nome: "Henry", idade: 22 },
        { nome: "Lobo", idade: 37 },
        { nome: "Chimbinha", idade: 45 }
      ];
    this.modalCtrl.create(ModalConteudoPage, {usuarios: this.usuarios}).present();      
  }

  

}
