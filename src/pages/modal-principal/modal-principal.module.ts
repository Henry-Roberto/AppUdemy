import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalPrincipalPage } from './modal-principal';

@NgModule({
  declarations: [
    ModalPrincipalPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalPrincipalPage),
  ],
})
export class ModalPrincipalPageModule {}
