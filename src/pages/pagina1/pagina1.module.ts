import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Pagina1Page } from './pagina1';

@NgModule({
  declarations: [
    Pagina1Page,
  ],
  imports: [
    IonicPageModule.forChild(Pagina1Page),
  ],
})
export class Pagina1PageModule {}
