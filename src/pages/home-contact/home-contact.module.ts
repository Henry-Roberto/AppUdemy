import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomeContactPage } from './home-contact';

@NgModule({
  declarations: [
    HomeContactPage,
  ],
  imports: [
    IonicPageModule.forChild(HomeContactPage),
  ],
})
export class HomeContactPageModule {}
