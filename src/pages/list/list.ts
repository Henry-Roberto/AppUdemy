import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  itens: string [] = [
    'Laranja', 'Maça', 'Limão', 'Maracujá', 'Banana'
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  selecinarItem(item){
    console.log(item);
    
  }

}
