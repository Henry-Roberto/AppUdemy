"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CepPage = void 0;
var core_1 = require("@angular/core");
var ionic_angular_1 = require("ionic-angular");
var CepPage = /** @class */ (function () {
    function CepPage(CepProvider, loadingCtrl, toastCtrl) {
        this.CepProvider = CepProvider;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.infoCep = [{}];
    }
    CepPage.prototype.consultarEnderecoPeloCep = function () {
        var _this = this;
        var aguarde = this.loadingCtrl.create({
            content: "Processando..."
        });
        aguarde.present();
        if (this.cepDigitado != null) {
            if (this.cepDigitado.length == 0) {
                this.cepDigitado.substr(6); //REMOVE A SEXTA POSIÇÃO DA STRING
            }
            this.CepProvider.listarEndereco(this.cepDigitado).then(function (response) {
                console.log('sucesso ->', response);
                _this.infoCep = response;
            })["catch"](function (response) {
                console.log('error ->', response);
                _this.toastCtrl.create({
                    message: 'CEP não encontrado!',
                    duration: 2000,
                    position: 'bottom'
                }).present();
            });
            aguarde.dismiss();
        }
        else {
            this.toastCtrl.create({
                message: 'Nenhum CEP foi informado!',
                duration: 2000,
                position: 'top'
            }).present();
            aguarde.dismiss();
        }
        this.cepDigitado = null;
    };
    CepPage = __decorate([
        ionic_angular_1.IonicPage(),
        core_1.Component({
            selector: 'page-cep',
            templateUrl: 'cep.html'
        })
    ], CepPage);
    return CepPage;
}());
exports.CepPage = CepPage;
