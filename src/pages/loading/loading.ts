import { Component } from '@angular/core';
import { IonicPage, LoadingController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-loading',
  templateUrl: 'loading.html',
})
export class LoadingPage {

  constructor(public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    let aguarde = this.loadingCtrl.create({
      spinner: 'crescent',
      content: "Por favor aguarde...",
      duration: 500
    });

    aguarde.present();
  };

  salvar(){
    let aguarde = this.loadingCtrl.create({
      spinner: 'dots',
      content: "Por favor aguarde..."
    });

    aguarde.present();

    //Processsar algo
    setTimeout(() => {
      console.log('Salvando Dados');
      aguarde.dismiss();
    }, 5000);
  };

  salvarCustomizado(){
    let aguardeCustomizado = this.loadingCtrl.create({
      // spinner : 'hide',
      content : `<div class="custom-spinner-container">
                  <div class="custom-spinner-box">
                  <p>Load passando...</p>
                  <img src="../../assets/imgs/Bean Eater-1s-200px.svg">
                  </div>
                </div>`,
      duration: 5000
    });

    aguardeCustomizado.onDidDismiss(()=>{
      alert('Aguarde foi encerrado');
    });

    aguardeCustomizado.present();
  }


  loadComFirula(){
    let aguardeComFirula = this.loadingCtrl.create({
      spinner : 'hide',
      content : `  <div class="lds-dual-ring"></div>`,
      cssClass: 'lds-dual-ringteste',
      duration: 2000
    });

    aguardeComFirula.onDidDismiss(()=>{
      alert('Aguarde foi encerrado');
    });

    aguardeComFirula.present();
  }

  salvarSemSpinner(){
    let aguardeSemSpinner = this.loadingCtrl.create({
      spinner : 'hide',
      content : "Por favor aguarde"
    });

    aguardeSemSpinner.present();

    setTimeout(() => {
      console.log('Salvando Dados');
      aguardeSemSpinner.dismiss();
    }, 5000);

  }

  salvarComSpinnerDiferente(){
    let aguardeComSpinnerDiferente1 = this.loadingCtrl.create({
      spinner : 'dots',
      content : "Spinner - Dots",
      duration: 2000,
    });

    aguardeComSpinnerDiferente1.present();

    aguardeComSpinnerDiferente1.onDidDismiss(()=>{
      let aguardeComSpinnerDiferente2 = this.loadingCtrl.create({
        spinner : 'ios',
        content : "Spinner - ios",
        duration: 2000,
      });
      aguardeComSpinnerDiferente2.present();
    });
    }
  
}
