import { IconesPage } from './../icones/icones';
import { Component } from '@angular/core';
import { IonicPage, PopoverController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-popover',
  templateUrl: 'popover.html',
})
export class PopoverPage {

  constructor(public popOverCtrl: PopoverController) {
  }

  ionViewDidLoad() {
  }

  abrirPopover() {
    let popover = this.popOverCtrl.create(IconesPage);

    popover.present();
  }

}
