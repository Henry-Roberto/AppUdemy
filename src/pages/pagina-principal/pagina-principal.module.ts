import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PaginaPrincipalPage } from './pagina-principal';

@NgModule({
  declarations: [
    PaginaPrincipalPage,
  ],
  imports: [
    IonicPageModule.forChild(PaginaPrincipalPage),
  ],
})
export class PaginaPrincipalPageModule {}
