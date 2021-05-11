"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ToastPage = void 0;
var core_1 = require("@angular/core");
var ionic_angular_1 = require("ionic-angular");
var ToastPage = /** @class */ (function () {
    function ToastPage(toastCtrl) {
        this.toastCtrl = toastCtrl;
    }
    ToastPage.prototype.ionViewDidLoad = function () {
    };
    ToastPage.prototype.showToast = function (position) {
        var toast = this.toastCtrl.create({
            message: 'Dados salvos com sucesso!',
            duration: 2000,
            position: position
        }).present();
    };
    ;
    ToastPage.prototype.showLongToast = function () {
        this.toastCtrl.create({
            message: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse voluptatem iste placeat dignissimos maxime, iure laborum velit pariatur! Et delectus exercitationem commodi accusamus ex eos dolor similique unde quidem eius?',
            duration: 2000,
            position: 'top'
        }).present();
    };
    ;
    ToastPage.prototype.showToastWithCloseButton = function () {
        this.toastCtrl.create({
            message: 'Operação realizada com sucesso!',
            showCloseButton: true,
            closeButtonText: 'OK',
            position: 'top'
        }).present();
    };
    ToastPage = __decorate([
        ionic_angular_1.IonicPage(),
        core_1.Component({
            selector: 'page-toast',
            templateUrl: 'toast.html'
        })
    ], ToastPage);
    return ToastPage;
}());
exports.ToastPage = ToastPage;
