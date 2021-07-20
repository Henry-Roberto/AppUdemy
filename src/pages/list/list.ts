import { Component } from '@angular/core';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  itens: string [] = [
    'Laranja', 'Maça', 'Limão', 'Maracujá', 'Banana'
  ]

  constructor() {

  }

  selecinarItem(item){
    console.log(item);
    
  }

}
