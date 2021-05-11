import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-pagina2',
  templateUrl: 'pagina2.html',
})
export class Pagina2Page {
  private usuario : any;

  constructor(public navParams: NavParams,
              public navCtrl: NavController) {
    this.usuario = this.navParams.get("usuario");

    console.log(this.usuario);
    
  }

  ionViewDidLoad() {

  }

  fecharPagina(){
    this.navCtrl.pop();
  }

}
