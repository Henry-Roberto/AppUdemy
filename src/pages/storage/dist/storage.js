"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.StoragePage = void 0;
var core_1 = require("@angular/core");
var ionic_angular_1 = require("ionic-angular");
var StoragePage = /** @class */ (function () {
    function StoragePage(storage) {
        this.storage = storage;
    }
    StoragePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.storage.get("ultimoBotaoPressionado").then(function (valor) {
            _this.ultimoBotaoPressionado = valor;
        });
    };
    StoragePage.prototype.botao1 = function () {
        this.storage.set('ultimoBotaoPressionado', 1);
        //javascript
        localStorage.setItem('opcao', '1');
    };
    StoragePage.prototype.botao2 = function () {
        this.storage.set('ultimoBotaoPressionado', 2);
        //javascript
        localStorage.setItem('opcao', '2');
    };
    StoragePage = __decorate([
        ionic_angular_1.IonicPage(),
        core_1.Component({
            selector: 'page-storage',
            templateUrl: 'storage.html'
        })
    ], StoragePage);
    return StoragePage;
}());
exports.StoragePage = StoragePage;
