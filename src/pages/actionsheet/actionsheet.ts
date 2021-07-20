import { Component } from '@angular/core';
import { ActionSheetController, IonicPage} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-actionsheet',
  templateUrl: 'actionsheet.html',
})
export class ActionsheetPage {

  constructor(public actionSheetCtrl : ActionSheetController) {
  }

  ionViewDidLoad() {
    
  }

  AbrirActionSheet(){
      let actionsheet = this.actionSheetCtrl.create(
          {
            title: "Opções",
            buttons: [
                {
                    icon: 'md-create',
                    text: 'Opção A',
                    role: 'destructive',
                    handler: ()=>{
                        alert('Você clicou na opção A.')
                    }
                },
                {
                    text: 'Opção B',
                    handler: ()=>{
                        alert('Você clicou na opção B.')
                    }
                },
                {
                    icon: 'md-exit',
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: ()=>{
                        alert('Você clicou na opção Cancelar.')
                    }
                }
            ]
          }
      );

      actionsheet.present();
  }

}
