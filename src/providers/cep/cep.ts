import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';

/*
  Generated class for the CepProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CepProvider {

  constructor(public http: HttpClient) {
  }

  listarEndereco(cep : string){
    let url = "https://viacep.com.br/ws/"+ cep +"/json/";
    
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    
    return this.http.get(url, {  }).toPromise();
  }
}
