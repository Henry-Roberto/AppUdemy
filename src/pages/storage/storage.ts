import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { NativeStorage } from '@ionic-native/native-storage';

@IonicPage()
@Component({
  selector: 'page-storage',
  templateUrl: 'storage.html',
})
export class StoragePage {
  ultimoBotaoPressionado: any;

  constructor(private storage : NativeStorage) {
  }

  ionViewDidLoad() {
    this.storage.getItem("ultimoBotaoPressionado").then((valor) => {
    this.ultimoBotaoPressionado = valor;
    });
  }

  botao1(){
    this.storage.setItem('ultimoBotaoPressionado', 1);
    
    //javascript
    // localStorage.setItem('opcao', '1');
  }

  botao2(){
    this.storage.setItem('ultimoBotaoPressionado', 2);

     //javascript
    //  localStorage.setItem('opcao', '2');
  }

}
