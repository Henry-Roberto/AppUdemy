import { CepProvider } from './../../providers/cep/cep';
import { Component } from '@angular/core';
import { IonicPage, LoadingController, ToastController} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-cep',
  templateUrl: 'cep.html',
})
export class CepPage {
  cepDigitado : string;
  infoCep : any = [{}];
  constructor(private CepProvider : CepProvider,
              private loadingCtrl : LoadingController,
              private toastCtrl   : ToastController) {
  }

  consultarEnderecoPeloCep(){

    let aguarde = this.loadingCtrl.create({
      content: "Processando...",
    });
    aguarde.present();   


    if (this.cepDigitado != null) {
      
    if(this.cepDigitado.length == 0){
      this.cepDigitado.substr(6); //REMOVE A SEXTA POSIÇÃO DA STRING
    }
      this.CepProvider.listarEndereco(this.cepDigitado).then((response) => {
        console.log('sucesso ->', response);

        this.infoCep = response
      }).catch((response) => {
        console.log('error ->', response);

        this.toastCtrl.create({
          message : 'CEP não encontrado!',
          duration: 2000,
          position: 'bottom'
        }).present();
      });

      aguarde.dismiss();
    } else {
      this.toastCtrl.create({
        message : 'Nenhum CEP foi informado!',
        duration: 2000,
        position: 'top'
      }).present();
    
      aguarde.dismiss();
    }

    this.cepDigitado = null
  }


}
