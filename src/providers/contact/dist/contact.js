"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ContactList = exports.Contact = exports.ContactProvider = void 0;
var core_1 = require("@angular/core");
var ContactProvider = /** @class */ (function () {
    function ContactProvider(storage, datePipe) {
        this.storage = storage;
        this.datePipe = datePipe;
    }
    ContactProvider.prototype.insert = function (contact) {
        var key = this.datePipe.transform(new Date(), "ddMMyyyyHHmmss");
        return this.save(key, contact);
    };
    ContactProvider.prototype.update = function (key, contact) {
        return this.save(key, contact);
    };
    ContactProvider.prototype.save = function (key, contact) {
        return this.storage.set(key, contact);
    };
    ContactProvider.prototype.remove = function (key) {
        return this.storage.remove(key);
    };
    ContactProvider.prototype.getAll = function () {
        var contacts = [];
        return this.storage.forEach(function (value, key, iterationNumber) {
            var contact = new ContactList();
            contact.key = key;
            contact.contact = value;
            contacts.push(contact);
        })
            .then(function () {
            return Promise.resolve(contacts);
        })["catch"](function (error) {
            return Promise.reject(error);
        });
    };
    ContactProvider = __decorate([
        core_1.Injectable()
    ], ContactProvider);
    return ContactProvider;
}());
exports.ContactProvider = ContactProvider;
var Contact = /** @class */ (function () {
    function Contact() {
    }
    return Contact;
}());
exports.Contact = Contact;
var ContactList = /** @class */ (function () {
    function ContactList() {
    }
    return ContactList;
}());
exports.ContactList = ContactList;
