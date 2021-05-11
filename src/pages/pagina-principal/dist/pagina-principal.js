"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PaginaPrincipalPage = void 0;
var pagina2_1 = require("./../pagina2/pagina2");
var pagina1_1 = require("./../pagina1/pagina1");
var core_1 = require("@angular/core");
var ionic_angular_1 = require("ionic-angular");
var PaginaPrincipalPage = /** @class */ (function () {
    function PaginaPrincipalPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PaginaPrincipalPage.prototype.ionViewDidLoad = function () {
    };
    PaginaPrincipalPage.prototype.abrirPagina1ComoRoot = function () {
        this.navCtrl.setRoot(pagina1_1.Pagina1Page);
    };
    PaginaPrincipalPage.prototype.abrirPagina2ComoRoot = function () {
        this.navCtrl.setRoot(pagina2_1.Pagina2Page);
    };
    PaginaPrincipalPage.prototype.abrirPagina1ComPush = function () {
        this.navCtrl.push(pagina1_1.Pagina1Page);
    };
    PaginaPrincipalPage.prototype.abrirPagina2ComPush = function () {
        this.navCtrl.push(pagina2_1.Pagina2Page);
    };
    PaginaPrincipalPage = __decorate([
        ionic_angular_1.IonicPage(),
        core_1.Component({
            selector: 'page-pagina-principal',
            templateUrl: 'pagina-principal.html'
        })
    ], PaginaPrincipalPage);
    return PaginaPrincipalPage;
}());
exports.PaginaPrincipalPage = PaginaPrincipalPage;
