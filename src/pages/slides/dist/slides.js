"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SlidesPage = void 0;
var core_1 = require("@angular/core");
var ionic_angular_1 = require("ionic-angular");
var SlidesPage = /** @class */ (function () {
    function SlidesPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.slide = 2;
    }
    SlidesPage.prototype.ionViewDidLoad = function () {
    };
    SlidesPage.prototype.goToSlide = function () {
        this.slides.slideTo(this.slide, 800);
        this.slide += 1;
        if (this.slide > 4) {
            this.slide = 1;
        }
    };
    __decorate([
        core_1.ViewChild(ionic_angular_1.Slides)
    ], SlidesPage.prototype, "slides");
    SlidesPage = __decorate([
        ionic_angular_1.IonicPage(),
        core_1.Component({
            selector: 'page-slides',
            templateUrl: 'slides.html'
        })
    ], SlidesPage);
    return SlidesPage;
}());
exports.SlidesPage = SlidesPage;
