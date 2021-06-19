import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-storage',
  templateUrl: 'storage.html',
})
export class StoragePage {
  public ultimoBotaoPressionado: any;

  constructor(private storage: Storage) {
  }

  // ionViewDidLoad() {
  //   this.storage.get("ultimoBotaoPressionado").then((valor) => {
  //   this.ultimoBotaoPressionado = valor;
  //   });
  // }

  // botao1(){
  //   this.storage.set('ultimoBotaoPressionado', 1);
    
  //   //javascript
  //   localStorage.setItem('opcao', '1');
  // }

  // botao2(){
  //   this.storage.set('ultimoBotaoPressionado', 2);

  //    //javascript
  //    localStorage.setItem('opcao', '2');
  // }

}
