"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.EditContactPage = void 0;
var core_1 = require("@angular/core");
var ionic_angular_1 = require("ionic-angular");
var contact_1 = require("../../providers/contact/contact");
var EditContactPage = /** @class */ (function () {
    function EditContactPage(navCtrl, navParams, contactProvider, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.contactProvider = contactProvider;
        this.toastCtrl = toastCtrl;
        if (this.navParams.data.contact && this.navParams.data.key) {
            this.model = this.navParams.data.contact;
            this.key = this.navParams.data.key;
        }
        else {
            this.model = new contact_1.Contact();
        }
    }
    EditContactPage.prototype.save = function () {
        var _this = this;
        this.saveContact()
            .then(function () {
            _this.toastCtrl.create({ message: 'Contato salvo', duration: 3000, position: 'botton' }).present;
            _this.navCtrl.pop();
        })["catch"](function () {
            _this.toastCtrl.create({ message: 'Erro ao salvar o contato', duration: 3000, position: 'botton' }).present;
        });
    };
    EditContactPage.prototype.saveContact = function () {
        if (this.key) {
            return this.contactProvider.update(this.key, this.model);
        }
        else {
            return this.contactProvider.insert(this.model);
        }
    };
    EditContactPage = __decorate([
        ionic_angular_1.IonicPage(),
        core_1.Component({
            selector: 'page-edit-contact',
            templateUrl: 'edit-contact.html'
        })
    ], EditContactPage);
    return EditContactPage;
}());
exports.EditContactPage = EditContactPage;
