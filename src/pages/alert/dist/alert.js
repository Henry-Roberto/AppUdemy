"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AlertPage = void 0;
var core_1 = require("@angular/core");
var ionic_angular_1 = require("ionic-angular");
var AlertPage = /** @class */ (function () {
    function AlertPage(navCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
    }
    AlertPage.prototype.Sairtela = function () {
        this.navCtrl.pop();
    };
    AlertPage.prototype.basicAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Atenção',
            subTitle: 'Curso de Ionic em promoção',
            buttons: ['Ok!']
        });
        alert.present();
    };
    AlertPage.prototype.confirmAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Confirmar compra',
            message: 'Tem certeza que deseja comprar esse livro?',
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: function () {
                        console.log('Compra cancelada!');
                    }
                },
                {
                    text: 'Comprar',
                    handler: function () {
                        console.log('Compra realizada com sucesso!');
                    }
                }
            ]
        });
        alert.present();
    };
    AlertPage.prototype.inputAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Acesso restrito',
            inputs: [
                {
                    name: 'username',
                    placeholder: 'Login'
                },
                {
                    name: 'senha',
                    placeholder: 'Senha',
                    type: 'password'
                },
            ],
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: function (data) { return (console.log('Autenticação cancelada!')); }
                },
                {
                    text: 'Entrar',
                    handler: function (data) {
                        if (data.login == 'henry' && data.senha == '123') {
                            console.log('Login ou Senha incorreto!');
                        }
                        else {
                            console.log('Usuario autenticado!');
                        }
                    }
                }
            ]
        }).present();
    };
    AlertPage.prototype.radioAlert = function () {
        var alert = this.alertCtrl.create();
        alert.setTitle('Escolha uma cor');
        alert.addInput({
            type: 'radio',
            label: 'Azul',
            value: 'blue',
            checked: true
        });
        alert.addInput({
            type: 'radio',
            label: 'Vermelho',
            value: 'red',
            checked: false
        });
        alert.addInput({
            type: 'radio',
            label: 'Verde',
            value: 'green',
            checked: false
        });
        alert.addButton("Cancelar");
        alert.addButton({
            text: 'OK',
            handler: function (data) {
                console.log('Cor selecionada', data);
            }
        });
        alert.present();
    };
    AlertPage.prototype.checkboxAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Quais Frutas você gosta?',
            inputs: [
                {
                    type: 'checkbox',
                    label: 'Laranja',
                    value: 'orange',
                    checked: true
                },
                {
                    type: 'checkbox',
                    label: 'Banana',
                    value: 'orange',
                    checked: false
                },
            ],
            buttons: [
                {
                    text: 'OK',
                    handler: function (data) {
                        console.log('Você selecionou as frutas: ', data);
                    }
                }
            ]
        });
        alert.present();
    };
    AlertPage = __decorate([
        ionic_angular_1.IonicPage(),
        core_1.Component({
            selector: 'page-alert',
            templateUrl: 'alert.html'
        })
    ], AlertPage);
    return AlertPage;
}());
exports.AlertPage = AlertPage;
