"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SegmentPage = void 0;
var core_1 = require("@angular/core");
var ionic_angular_1 = require("ionic-angular");
var SegmentPage = /** @class */ (function () {
    function SegmentPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.game = 'bloodborne';
    }
    SegmentPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SegmentPage');
    };
    SegmentPage = __decorate([
        ionic_angular_1.IonicPage(),
        core_1.Component({
            selector: 'page-segment',
            templateUrl: 'segment.html'
        })
    ], SegmentPage);
    return SegmentPage;
}());
exports.SegmentPage = SegmentPage;
