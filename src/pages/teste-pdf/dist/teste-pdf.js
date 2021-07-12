"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.TestePdfPage = void 0;
var core_1 = require("@angular/core");
var ionic_angular_1 = require("ionic-angular");
// import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer';
var webviewer_1 = require("@pdftron/webviewer");
var TestePdfPage = /** @class */ (function () {
    function TestePdfPage( //private document: DocumentViewer,
    ) {
    }
    TestePdfPage.prototype.ngAfterViewInit = function () {
        webviewer_1["default"]({
            path: '../../assets/lib',
            initialDoc: '../../assets/METODOLOGIA.pdf'
        }, this.viewerRef.nativeElement).then(function (instance) {
        });
    };
    TestePdfPage.prototype.ionViewDidLoad = function () {
    };
    __decorate([
        core_1.ViewChild('viewer')
    ], TestePdfPage.prototype, "viewerRef");
    TestePdfPage = __decorate([
        ionic_angular_1.IonicPage(),
        core_1.Component({
            selector: 'page-teste-pdf',
            templateUrl: 'teste-pdf.html'
        })
    ], TestePdfPage);
    return TestePdfPage;
}());
exports.TestePdfPage = TestePdfPage;
