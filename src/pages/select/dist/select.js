"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SelectPage = void 0;
var core_1 = require("@angular/core");
var ionic_angular_1 = require("ionic-angular");
var SelectPage = /** @class */ (function () {
    function SelectPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SelectPage.prototype.ionViewDidLoad = function () {
        this.selectOptions = {
            title: 'Bandas Brabas',
            subTitle: 'Selecione a Banda mais Braba',
            mode: 'md'
        };
    };
    SelectPage = __decorate([
        ionic_angular_1.IonicPage(),
        core_1.Component({
            selector: 'page-select',
            templateUrl: 'select.html'
        })
    ], SelectPage);
    return SelectPage;
}());
exports.SelectPage = SelectPage;
