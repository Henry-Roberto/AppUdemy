import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BotoesPage } from './botoes';

@NgModule({
  declarations: [
    BotoesPage,
  ],
  imports: [
    IonicPageModule.forChild(BotoesPage),
  ],
})
export class BotoesPageModule {}
