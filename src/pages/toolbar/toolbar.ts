import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-toolbar',
  templateUrl: 'toolbar.html',
})
export class ToolbarPage {

  constructor() {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ToolbarPage');
  }

}
