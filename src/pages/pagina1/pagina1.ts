import { Pagina2Page } from './../pagina2/pagina2';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-pagina1',
  templateUrl: 'pagina1.html',
})
export class Pagina1Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    
  }

  abrirPagina2ComoRoot(){
    this.navCtrl.setRoot(Pagina2Page)
  }

  abrirPagina2ComPush(){
    this.navCtrl.push(Pagina2Page)
  }

  abrirPagina2ComParametros(){
    let usuarioParameter = {nome: 'Henry Roberto', idade: 37};
    this.navCtrl.push(Pagina2Page, { usuario : usuarioParameter})
  }


}
