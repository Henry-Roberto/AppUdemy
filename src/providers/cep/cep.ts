import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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
