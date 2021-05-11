"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ModalPrincipalPage = void 0;
var modal_conteudo_1 = require("./../modal-conteudo/modal-conteudo");
var fab_1 = require("./../fab/fab");
var core_1 = require("@angular/core");
var ionic_angular_1 = require("ionic-angular");
var ModalPrincipalPage = /** @class */ (function () {
    function ModalPrincipalPage(modalCtrl) {
        this.modalCtrl = modalCtrl;
        this.usuarios = [{
                nome: "",
                idade: 0
            }];
        var data = new Date('4 17 2021');
        var diaDaSemana = data.getDay();
        console.log(diaDaSemana);
    }
    ModalPrincipalPage.prototype.abrirModalBasico = function () {
        this.modalCtrl.create(fab_1.FabPage).present();
    };
    ModalPrincipalPage.prototype.abrirModalParametros = function () {
        // let param = {usuario: {nome: "Henry", idade: 37}};
        // this.modalCtrl.create(FabPage, param ).present();
        this.usuarios = [
            { nome: "Henry", idade: 22 },
            { nome: "Lobo", idade: 37 },
            { nome: "Chimbinha", idade: 45 },
            { nome: "Henry", idade: 22 },
            { nome: "Lobo", idade: 37 },
            { nome: "Chimbinha", idade: 45 },
            { nome: "Henry", idade: 22 },
            { nome: "Lobo", idade: 37 },
            { nome: "Chimbinha", idade: 45 },
            { nome: "Henry", idade: 22 },
            { nome: "Lobo", idade: 37 },
            { nome: "Chimbinha", idade: 45 },
            { nome: "Henry", idade: 22 },
            { nome: "Lobo", idade: 37 },
            { nome: "Chimbinha", idade: 45 },
            { nome: "Henry", idade: 22 },
            { nome: "Lobo", idade: 37 },
            { nome: "Chimbinha", idade: 45 }
        ];
        this.modalCtrl.create(modal_conteudo_1.ModalConteudoPage, { usuarios: this.usuarios }).present();
    };
    ModalPrincipalPage = __decorate([
        ionic_angular_1.IonicPage(),
        core_1.Component({
            selector: 'page-modal-principal',
            templateUrl: 'modal-principal.html'
        })
    ], ModalPrincipalPage);
    return ModalPrincipalPage;
}());
exports.ModalPrincipalPage = ModalPrincipalPage;
