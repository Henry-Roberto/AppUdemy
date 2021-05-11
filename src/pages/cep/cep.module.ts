import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CepPage } from './cep';

@NgModule({
  declarations: [
    CepPage,
  ],
  imports: [
    IonicPageModule.forChild(CepPage),
  ],
})
export class CepPageModule {}
