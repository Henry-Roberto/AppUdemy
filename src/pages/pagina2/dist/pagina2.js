"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Pagina2Page = void 0;
var core_1 = require("@angular/core");
var ionic_angular_1 = require("ionic-angular");
var Pagina2Page = /** @class */ (function () {
    function Pagina2Page(navParams, navCtrl) {
        this.navParams = navParams;
        this.navCtrl = navCtrl;
        this.usuario = this.navParams.get("usuario");
        console.log(this.usuario);
    }
    Pagina2Page.prototype.ionViewDidLoad = function () {
    };
    Pagina2Page.prototype.fecharPagina = function () {
        this.navCtrl.pop();
    };
    Pagina2Page = __decorate([
        ionic_angular_1.IonicPage(),
        core_1.Component({
            selector: 'page-pagina2',
            templateUrl: 'pagina2.html'
        })
    ], Pagina2Page);
    return Pagina2Page;
}());
exports.Pagina2Page = Pagina2Page;
