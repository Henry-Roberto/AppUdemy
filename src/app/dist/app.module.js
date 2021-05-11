"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var modal_principal_1 = require("./../pages/modal-principal/modal-principal");
var modal_conteudo_1 = require("./../pages/modal-conteudo/modal-conteudo");
var home_contact_1 = require("./../pages/home-contact/home-contact");
var storage_1 = require("./../pages/storage/storage");
var pagina2_1 = require("./../pages/pagina2/pagina2");
var pagina1_1 = require("./../pages/pagina1/pagina1");
var pagina_principal_1 = require("./../pages/pagina-principal/pagina-principal");
var select_1 = require("./../pages/select/select");
var tabs_1 = require("./../pages/tabs/tabs");
var segment_1 = require("./../pages/segment/segment");
var toolbar_1 = require("./../pages/toolbar/toolbar");
var toast_1 = require("./../pages/toast/toast");
var loading_1 = require("./../pages/loading/loading");
var toggle_1 = require("./../pages/toggle/toggle");
var cep_1 = require("./../pages/cep/cep");
var list_1 = require("./../pages/list/list");
var input_1 = require("./../pages/input/input");
var icones_1 = require("./../pages/icones/icones");
var grid_1 = require("./../pages/grid/grid");
var fab_1 = require("./../pages/fab/fab");
var date_time_1 = require("./../pages/date-time/date-time");
var range_1 = require("./../pages/range/range");
var radio_1 = require("./../pages/radio/radio");
var checkbox_1 = require("./../pages/checkbox/checkbox");
var testejs_1 = require("./../pages/testejs/testejs");
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var ionic_angular_1 = require("ionic-angular");
var app_component_1 = require("./app.component");
var home_1 = require("../pages/home/home");
var status_bar_1 = require("@ionic-native/status-bar");
var splash_screen_1 = require("@ionic-native/splash-screen");
var http_1 = require("@angular/common/http");
var alert_1 = require("./../pages/alert/alert");
var actionsheet_1 = require("./../pages/actionsheet/actionsheet");
var badges_1 = require("./../pages/badges/badges");
var botoes_1 = require("./../pages/botoes/botoes");
var card_1 = require("./../pages/card/card");
var cep_2 = require("../providers/cep/cep");
var storage_2 = require("@ionic/storage");
var common_1 = require("@angular/common"); //FORMATAR OS DADOS
var contact_1 = require("../providers/contact/contact");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                actionsheet_1.ActionsheetPage,
                alert_1.AlertPage,
                badges_1.BadgesPage,
                botoes_1.BotoesPage,
                card_1.CardPage,
                cep_1.CepPage,
                checkbox_1.CheckboxPage,
                date_time_1.DateTimePage,
                fab_1.FabPage,
                grid_1.GridPage,
                home_1.HomePage,
                icones_1.IconesPage,
                input_1.InputPage,
                list_1.ListPage,
                loading_1.LoadingPage,
                app_component_1.MyApp,
                radio_1.RadioPage,
                range_1.RangePage,
                testejs_1.TesteJS,
                toast_1.ToastPage,
                toggle_1.TogglePage,
                toolbar_1.ToolbarPage,
                segment_1.SegmentPage,
                tabs_1.TabsPage,
                select_1.SelectPage,
                pagina_principal_1.PaginaPrincipalPage,
                pagina1_1.Pagina1Page,
                pagina2_1.Pagina2Page,
                storage_1.StoragePage,
                home_contact_1.HomeContactPage,
                modal_conteudo_1.ModalConteudoPage,
                modal_principal_1.ModalPrincipalPage
            ],
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpClientModule,
                ionic_angular_1.IonicModule.forRoot(app_component_1.MyApp, { mode: 'ios' }),
                storage_2.IonicStorageModule.forRoot()
            ],
            bootstrap: [ionic_angular_1.IonicApp],
            entryComponents: [
                actionsheet_1.ActionsheetPage,
                alert_1.AlertPage,
                badges_1.BadgesPage,
                botoes_1.BotoesPage,
                card_1.CardPage,
                cep_1.CepPage,
                checkbox_1.CheckboxPage,
                date_time_1.DateTimePage,
                fab_1.FabPage,
                grid_1.GridPage,
                home_1.HomePage,
                icones_1.IconesPage,
                input_1.InputPage,
                list_1.ListPage,
                loading_1.LoadingPage,
                app_component_1.MyApp,
                radio_1.RadioPage,
                range_1.RangePage,
                testejs_1.TesteJS,
                toast_1.ToastPage,
                toggle_1.TogglePage,
                toolbar_1.ToolbarPage,
                segment_1.SegmentPage,
                tabs_1.TabsPage,
                select_1.SelectPage,
                pagina_principal_1.PaginaPrincipalPage,
                pagina1_1.Pagina1Page,
                pagina2_1.Pagina2Page,
                storage_1.StoragePage,
                home_contact_1.HomeContactPage,
                modal_conteudo_1.ModalConteudoPage,
                modal_principal_1.ModalPrincipalPage
            ],
            providers: [
                status_bar_1.StatusBar,
                splash_screen_1.SplashScreen,
                { provide: core_1.ErrorHandler, useClass: ionic_angular_1.IonicErrorHandler },
                cep_2.CepProvider,
                contact_1.ContactProvider,
                common_1.DatePipe
            ]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
