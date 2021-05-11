"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CepProvider = void 0;
var core_1 = require("@angular/core");
/*
  Generated class for the CepProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var CepProvider = /** @class */ (function () {
    function CepProvider(http) {
        this.http = http;
    }
    CepProvider.prototype.listarEndereco = function (cep) {
        var url = "https://viacep.com.br/ws/" + cep + "/json/";
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.get(url, {}).toPromise();
    };
    CepProvider = __decorate([
        core_1.Injectable()
    ], CepProvider);
    return CepProvider;
}());
exports.CepProvider = CepProvider;
