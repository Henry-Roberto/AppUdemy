"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.LoadingPage = void 0;
var core_1 = require("@angular/core");
var ionic_angular_1 = require("ionic-angular");
var LoadingPage = /** @class */ (function () {
    function LoadingPage(loadingCtrl) {
        this.loadingCtrl = loadingCtrl;
    }
    LoadingPage.prototype.ionViewDidLoad = function () {
        var aguarde = this.loadingCtrl.create({
            spinner: 'crescent',
            content: "Por favor aguarde...",
            duration: 500
        });
        aguarde.present();
    };
    ;
    LoadingPage.prototype.salvar = function () {
        var aguarde = this.loadingCtrl.create({
            spinner: 'dots',
            content: "Por favor aguarde..."
        });
        aguarde.present();
        //Processsar algo
        setTimeout(function () {
            console.log('Salvando Dados');
            aguarde.dismiss();
        }, 5000);
    };
    ;
    LoadingPage.prototype.salvarCustomizado = function () {
        var aguardeCustomizado = this.loadingCtrl.create({
            // spinner : 'hide',
            content: "<div class=\"custom-spinner-container\">\n                  <div class=\"custom-spinner-box\">\n                  <p>Load passando...</p>\n                  <img src=\"../../assets/imgs/Bean Eater-1s-200px.svg\">\n                  </div>\n                </div>",
            duration: 5000
        });
        aguardeCustomizado.onDidDismiss(function () {
            alert('Aguarde foi encerrado');
        });
        aguardeCustomizado.present();
    };
    LoadingPage.prototype.loadComFirula = function () {
        var aguardeComFirula = this.loadingCtrl.create({
            spinner: 'hide',
            content: "  <div class=\"lds-dual-ring\"></div>",
            cssClass: 'lds-dual-ringteste',
            duration: 2000
        });
        aguardeComFirula.onDidDismiss(function () {
            alert('Aguarde foi encerrado');
        });
        aguardeComFirula.present();
    };
    LoadingPage.prototype.salvarSemSpinner = function () {
        var aguardeSemSpinner = this.loadingCtrl.create({
            spinner: 'hide',
            content: "Por favor aguarde"
        });
        aguardeSemSpinner.present();
        setTimeout(function () {
            console.log('Salvando Dados');
            aguardeSemSpinner.dismiss();
        }, 5000);
    };
    LoadingPage.prototype.salvarComSpinnerDiferente = function () {
        var _this = this;
        var aguardeComSpinnerDiferente1 = this.loadingCtrl.create({
            spinner: 'dots',
            content: "Spinner - Dots",
            duration: 2000
        });
        aguardeComSpinnerDiferente1.present();
        aguardeComSpinnerDiferente1.onDidDismiss(function () {
            var aguardeComSpinnerDiferente2 = _this.loadingCtrl.create({
                spinner: 'ios',
                content: "Spinner - ios",
                duration: 2000
            });
            aguardeComSpinnerDiferente2.present();
        });
    };
    LoadingPage = __decorate([
        ionic_angular_1.IonicPage(),
        core_1.Component({
            selector: 'page-loading',
            templateUrl: 'loading.html'
        })
    ], LoadingPage);
    return LoadingPage;
}());
exports.LoadingPage = LoadingPage;
