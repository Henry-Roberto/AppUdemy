import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-slides',
  templateUrl: 'slides.html',
})

export class SlidesPage {

  @ViewChild(Slides) slides: Slides;

  private slide: number= 2;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
  }


  goToSlide() {
    this.slides.slideTo(this.slide, 800);
    this.slide += 1;
    if(this.slide > 4) {
      this.slide = 1;
    }
  }

}
