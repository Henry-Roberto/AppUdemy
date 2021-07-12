import { DocumentViewer } from '@ionic-native/document-viewer';
import { TestePdfPage } from './../pages/teste-pdf/teste-pdf';
import { CameraPage } from '../pages/camera/camera';
import { SMS } from '@ionic-native/sms';
import { EstilizacaoPage } from './../pages/estilizacao/estilizacao';
import { PopoverPage } from './../pages/popover/popover';
import { SlidesPage } from './../pages/slides/slides';
import { ModalPrincipalPage } from './../pages/modal-principal/modal-principal';
import { ModalConteudoPage } from './../pages/modal-conteudo/modal-conteudo';
import { HomeContactPage } from './../pages/home-contact/home-contact';
import { StoragePage } from './../pages/storage/storage';
import { Pagina2Page } from './../pages/pagina2/pagina2';
import { Pagina1Page } from './../pages/pagina1/pagina1';
import { PaginaPrincipalPage } from './../pages/pagina-principal/pagina-principal';
import { SelectPage } from './../pages/select/select';
import { TabsPage } from './../pages/tabs/tabs';
import { SegmentPage } from './../pages/segment/segment';
import { ToolbarPage } from './../pages/toolbar/toolbar';
import { ToastPage } from './../pages/toast/toast';
import { LoadingPage } from './../pages/loading/loading';
import { TogglePage } from './../pages/toggle/toggle';
import { CepPage } from './../pages/cep/cep';
import { ListPage } from './../pages/list/list';
import { InputPage } from './../pages/input/input';
import { IconesPage } from './../pages/icones/icones';
import { GridPage } from './../pages/grid/grid';
import { FabPage } from './../pages/fab/fab';
import { DateTimePage } from './../pages/date-time/date-time';
import { RangePage } from './../pages/range/range';
import { RadioPage } from './../pages/radio/radio';
import { CheckboxPage } from './../pages/checkbox/checkbox';
import { TesteJS } from './../pages/testejs/testejs';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HttpClientModule } from '@angular/common/http'
import { AlertPage } from './../pages/alert/alert';
import { ActionsheetPage } from './../pages/actionsheet/actionsheet';
import { BadgesPage } from './../pages/badges/badges';
import { BotoesPage } from './../pages/botoes/botoes';
import { CardPage } from './../pages/card/card';
import { CepProvider } from '../providers/cep/cep';
import { from } from 'rxjs/observable/from';
import { IonicStorageModule } from '@ionic/storage';
import { DatePipe } from '@angular/common'; //FORMATAR OS DADOS
import { ContactProvider } from '../providers/contact/contact';
import { Camera } from '@ionic-native/camera';

@NgModule({
  declarations: [
    ActionsheetPage,
    AlertPage,
    BadgesPage,
    BotoesPage,
    CardPage,
    CepPage,
    CheckboxPage,
    DateTimePage,
    FabPage,
    GridPage,
    HomePage,
    IconesPage,
    InputPage,
    ListPage,
    LoadingPage,
    MyApp,
    RadioPage,
    RangePage,
    TesteJS,
    ToastPage,
    TogglePage,
    ToolbarPage,
    SegmentPage,
    TabsPage,
    SelectPage,
    PaginaPrincipalPage,
    Pagina1Page,
    Pagina2Page,
    StoragePage,
    HomeContactPage,
    ModalConteudoPage,
    ModalPrincipalPage,
    SlidesPage,
    PopoverPage,
    EstilizacaoPage,
    CameraPage,
    TestePdfPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp, {mode: 'ios'}), //manter o layout igual em todas as plataformas
    // IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    ActionsheetPage,
    AlertPage,
    BadgesPage,
    BotoesPage,
    CardPage,
    CepPage,
    CheckboxPage,
    DateTimePage,
    FabPage,
    GridPage,
    HomePage,
    IconesPage,
    InputPage,
    ListPage,
    LoadingPage,
    MyApp,
    RadioPage,
    RangePage,
    TesteJS,
    ToastPage,
    TogglePage,
    ToolbarPage,
    SegmentPage,
    TabsPage,
    SelectPage,
    PaginaPrincipalPage,
    Pagina1Page,
    Pagina2Page,
    StoragePage,
    HomeContactPage,
    ModalConteudoPage,
    ModalPrincipalPage,
    SlidesPage,
    PopoverPage,
    EstilizacaoPage,
    CameraPage,
    TestePdfPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CepProvider,
    ContactProvider,
    DatePipe,
    SMS,
    DocumentViewer
  ]
})
export class AppModule {}
