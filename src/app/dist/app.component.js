"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.MyApp = void 0;
var teste_pdf_1 = require("./../pages/teste-pdf/teste-pdf");
var camera_1 = require("./../pages/camera/camera");
var estilizacao_1 = require("./../pages/estilizacao/estilizacao");
var popover_1 = require("./../pages/popover/popover");
var slides_1 = require("./../pages/slides/slides");
var modal_principal_1 = require("./../pages/modal-principal/modal-principal");
var home_contact_1 = require("./../pages/home-contact/home-contact");
var storage_1 = require("./../pages/storage/storage");
var pagina_principal_1 = require("./../pages/pagina-principal/pagina-principal");
var select_1 = require("./../pages/select/select");
var tabs_1 = require("./../pages/tabs/tabs");
var segment_1 = require("./../pages/segment/segment");
var toolbar_1 = require("./../pages/toolbar/toolbar");
var toast_1 = require("./../pages/toast/toast");
var loading_1 = require("./../pages/loading/loading");
var toggle_1 = require("./../pages/toggle/toggle");
var cep_1 = require("./../pages/cep/cep");
var input_1 = require("./../pages/input/input");
var icones_1 = require("./../pages/icones/icones");
var grid_1 = require("./../pages/grid/grid");
var fab_1 = require("./../pages/fab/fab");
var date_time_1 = require("./../pages/date-time/date-time");
var range_1 = require("./../pages/range/range");
var radio_1 = require("./../pages/radio/radio");
var checkbox_1 = require("./../pages/checkbox/checkbox");
var testejs_1 = require("./../pages/testejs/testejs");
var card_1 = require("./../pages/card/card");
var botoes_1 = require("./../pages/botoes/botoes");
var core_1 = require("@angular/core");
var ionic_angular_1 = require("ionic-angular");
var home_1 = require("./../pages/home/home");
var list_1 = require("./../pages/list/list");
var actionsheet_1 = require("./../pages/actionsheet/actionsheet");
var alert_1 = require("./../pages/alert/alert");
var badges_1 = require("./../pages/badges/badges");
var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = teste_pdf_1.TestePdfPage; // HomePage ion
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'ActionSheet', component: actionsheet_1.ActionsheetPage },
            { title: 'Alert', component: alert_1.AlertPage },
            { title: 'Badges', component: badges_1.BadgesPage },
            { title: 'Botões', component: botoes_1.BotoesPage },
            { title: 'Cards', component: card_1.CardPage },
            { title: 'Checkbox', component: checkbox_1.CheckboxPage },
            { title: 'DateTime', component: date_time_1.DateTimePage },
            { title: 'Fab', component: fab_1.FabPage },
            { title: 'Grid', component: grid_1.GridPage },
            { title: 'Home', component: home_1.HomePage },
            { title: 'Http', component: cep_1.CepPage },
            { title: 'Icones', component: icones_1.IconesPage },
            { title: 'Input', component: input_1.InputPage },
            { title: 'List', component: list_1.ListPage },
            { title: 'Loading', component: loading_1.LoadingPage },
            { title: 'Radio', component: radio_1.RadioPage },
            { title: 'Range', component: range_1.RangePage },
            { title: 'Teste JS', component: testejs_1.TesteJS },
            { title: 'Toast', component: toast_1.ToastPage },
            { title: 'Toggle', component: toggle_1.TogglePage },
            { title: 'Toolbar', component: toolbar_1.ToolbarPage },
            { title: 'Segment', component: segment_1.SegmentPage },
            { title: 'Tabs', component: tabs_1.TabsPage },
            { title: 'Select', component: select_1.SelectPage },
            { title: 'Navegação', component: pagina_principal_1.PaginaPrincipalPage },
            { title: 'Storage', component: storage_1.StoragePage },
            { title: 'HomeContact', component: home_contact_1.HomeContactPage },
            { title: 'ModalPrincipal', component: modal_principal_1.ModalPrincipalPage },
            { title: 'Slides', component: slides_1.SlidesPage },
            { title: 'Popover', component: popover_1.PopoverPage },
            { title: 'Estilizacao', component: estilizacao_1.EstilizacaoPage },
            { title: 'Camera', component: camera_1.CameraPage },
            { title: 'Teste PDF', component: teste_pdf_1.TestePdfPage }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        // this.nav.setRoot(page.component);
        this.nav.push(page.component);
    };
    __decorate([
        core_1.ViewChild(ionic_angular_1.Nav)
    ], MyApp.prototype, "nav");
    MyApp = __decorate([
        core_1.Component({
            templateUrl: 'app.html'
        })
    ], MyApp);
    return MyApp;
}());
exports.MyApp = MyApp;
