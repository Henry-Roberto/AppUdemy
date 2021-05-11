import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalConteudoPage } from './modal-conteudo';

@NgModule({
  declarations: [
    ModalConteudoPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalConteudoPage),
  ],
})
export class ModalConteudoPageModule {}
