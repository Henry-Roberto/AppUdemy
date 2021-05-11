"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Pagina1Page = void 0;
var pagina2_1 = require("./../pagina2/pagina2");
var core_1 = require("@angular/core");
var ionic_angular_1 = require("ionic-angular");
var Pagina1Page = /** @class */ (function () {
    function Pagina1Page(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    Pagina1Page.prototype.ionViewDidLoad = function () {
    };
    Pagina1Page.prototype.abrirPagina2ComoRoot = function () {
        this.navCtrl.setRoot(pagina2_1.Pagina2Page);
    };
    Pagina1Page.prototype.abrirPagina2ComPush = function () {
        this.navCtrl.push(pagina2_1.Pagina2Page);
    };
    Pagina1Page.prototype.abrirPagina2ComParametros = function () {
        var usuarioParameter = { nome: 'Henry Roberto', idade: 37 };
        this.navCtrl.push(pagina2_1.Pagina2Page, { usuario: usuarioParameter });
    };
    Pagina1Page = __decorate([
        ionic_angular_1.IonicPage(),
        core_1.Component({
            selector: 'page-pagina1',
            templateUrl: 'pagina1.html'
        })
    ], Pagina1Page);
    return Pagina1Page;
}());
exports.Pagina1Page = Pagina1Page;
