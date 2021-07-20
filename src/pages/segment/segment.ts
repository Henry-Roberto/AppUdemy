import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-segment',
  templateUrl: 'segment.html',
})
export class SegmentPage {
  game : string = 'bloodborne';
  constructor() {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SegmentPage');
  }

}
