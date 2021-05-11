"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.DateTimePage = void 0;
var core_1 = require("@angular/core");
var ionic_angular_1 = require("ionic-angular");
var DateTimePage = /** @class */ (function () {
    function DateTimePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.event = {
            month: '2018-01-06',
            timeStarts: '07:43',
            timeEnds: "2018-01-07"
        };
    }
    DateTimePage.prototype.ionViewDidLoad = function () {
    };
    DateTimePage = __decorate([
        ionic_angular_1.IonicPage(),
        core_1.Component({
            selector: 'page-date-time',
            templateUrl: 'date-time.html'
        })
    ], DateTimePage);
    return DateTimePage;
}());
exports.DateTimePage = DateTimePage;
