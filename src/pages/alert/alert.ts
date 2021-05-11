import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { AlertController, Button, IonicPage, NavController } from 'ionic-angular';
import { buffer } from 'rxjs/operator/buffer';
import { Title } from '@angular/platform-browser';

@IonicPage()
@Component({
    selector: 'page-alert',
    templateUrl: 'alert.html',
})
export class AlertPage {

    constructor(public navCtrl: NavController,
        private alertCtrl: AlertController) {
    }


    Sairtela() {
        this.navCtrl.pop();
    }

    basicAlert() {
        let alert = this.alertCtrl.create(
            {
                title: 'Atenção',
                subTitle: 'Curso de Ionic em promoção',
                buttons: ['Ok!']
            }
        );

        alert.present();
    }

    confirmAlert() {
        let alert = this.alertCtrl.create(
            {
                title: 'Confirmar compra',
                message: 'Tem certeza que deseja comprar esse livro?',
                buttons: [
                    {
                        text: 'Cancelar',
                        role: 'cancel',
                        handler: () => {
                            console.log('Compra cancelada!')
                        }
                    },
                    {
                        text: 'Comprar',
                        handler: () => {
                            console.log('Compra realizada com sucesso!')
                        }
                    }
                ]
            }
        );

        alert.present()
    }

    inputAlert() {
        let alert = this.alertCtrl.create(
            {
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
                        handler: data => (
                            console.log('Autenticação cancelada!')
                        )
                    },
                    {
                        text: 'Entrar',
                        handler: data => {
                            if (data.login == 'henry' && data.senha == '123') {
                                console.log('Login ou Senha incorreto!');
                            } else {
                                console.log('Usuario autenticado!');
                            }

                        }
                    }
                ]
            }
        ).present();

    }

    radioAlert() {
        let alert = this.alertCtrl.create();
        alert.setTitle('Escolha uma cor');
        alert.addInput({
            type : 'radio',
            label: 'Azul',
            value: 'blue',
            checked: true
        });
        alert.addInput({
            type : 'radio',
            label: 'Vermelho',
            value: 'red',
            checked: false
        });
        alert.addInput({
            type : 'radio',
            label: 'Verde',
            value: 'green',
            checked: false
        });

        alert.addButton("Cancelar");

        alert.addButton({
            text: 'OK',
            handler: (data: any) => {
                console.log('Cor selecionada', data);

            }
        });

        alert.present();
    }

    checkboxAlert() {
        let alert = this.alertCtrl.create(
            {
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
                        handler: (data: any) =>{
                            console.log('Você selecionou as frutas: ', data);
                        }
                    }
                ]
                
            }
        );

        alert.present();

    }

}
