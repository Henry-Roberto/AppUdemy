import { SegmentPage } from './../segment/segment';
import { CardPage } from './../card/card';
import { BotoesPage } from './../botoes/botoes';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  botoesPage = BotoesPage;
  cardPage = CardPage;
  segmentPage = SegmentPage;

  valorBadge : number = 5;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
