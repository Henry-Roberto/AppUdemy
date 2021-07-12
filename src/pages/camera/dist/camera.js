"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CameraPage = void 0;
var core_1 = require("@angular/core");
var ionic_angular_1 = require("ionic-angular");
var CameraPage = /** @class */ (function () {
    function CameraPage(toastCtrl) {
        this.toastCtrl = toastCtrl;
    }
    CameraPage.prototype.ionViewDidLoad = function () {
    };
    CameraPage.prototype.tirarFoto = function () {
        // const options: CameraOptions = {
        //   quality: 100,
        //   destinationType: this.camera.DestinationType.DATA_URL,
        //   encodingType: this.camera.EncodingType.JPEG,
        //   mediaType: this.camera.MediaType.PICTURE
        // }
        // this.camera.getPicture(options).then((imageData) => {
        //   debugger;
        //   let base64Image = 'data:image/jpeg;base64,' + imageData
        //   this.foto = base64Image;
        // },(err) => {
        //   this.toastCtrl.create({
        //     message : 'Não foi possivel tirar a foto',
        //     duration : 2000,
        //     position : 'top'
        //   }).present();
        // });
    };
    CameraPage = __decorate([
        ionic_angular_1.IonicPage(),
        core_1.Component({
            selector: 'page-camera',
            templateUrl: 'camera.html'
        })
    ], CameraPage);
    return CameraPage;
}());
exports.CameraPage = CameraPage;
