"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ContactProvider = void 0;
var core_1 = require("@angular/core");
var ContactProvider = /** @class */ (function () {
    function ContactProvider( /*private storage: Storage,
                private datePipe: DatePipe*/) {
    }
    ContactProvider = __decorate([
        core_1.Injectable()
    ], ContactProvider);
    return ContactProvider;
}());
exports.ContactProvider = ContactProvider;
// export class Contact {
//   name: string;
//   phone: number;
//   birth: Date;
//   active: boolean;
// }
// export class ContactList {
//   key: string;
//   contact: Contact;
// }
