import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TestePdfPage } from './teste-pdf';

@NgModule({
  declarations: [
    TestePdfPage,
  ],
  imports: [
    IonicPageModule.forChild(TestePdfPage),
  ],
})
export class TestePdfPageModule {}
