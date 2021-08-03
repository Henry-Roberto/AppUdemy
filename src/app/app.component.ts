import { LazyLoadPage } from './../pages/lazy-load/lazy-load';
import { AnimacaoPage } from './../pages/animacao/animacao';
import { LocalizacaoPage } from './../pages/localizacao/localizacao';
import { BarcodePage } from './../pages/barcode/barcode';
import { TestePdfPage } from './../pages/teste-pdf/teste-pdf';
import { CameraPage } from './../pages/camera/camera';
import { EstilizacaoPage } from './../pages/estilizacao/estilizacao';
import { PopoverPage } from './../pages/popover/popover';
import { SlidesPage } from './../pages/slides/slides';
import { ModalPrincipalPage } from './../pages/modal-principal/modal-principal';
import { HomeContactPage } from './../pages/home-contact/home-contact';
import { StoragePage } from './../pages/storage/storage';
import { PaginaPrincipalPage } from './../pages/pagina-principal/pagina-principal';
import { SelectPage } from './../pages/select/select';
import { TabsPage } from './../pages/tabs/tabs';
import { SegmentPage } from './../pages/segment/segment';
import { ToolbarPage } from './../pages/toolbar/toolbar';
import { ToastPage } from './../pages/toast/toast';
import { LoadingPage } from './../pages/loading/loading';
import { TogglePage } from './../pages/toggle/toggle';
import { CepPage } from './../pages/cep/cep';
import { InputPage } from './../pages/input/input';
import { IconesPage } from './../pages/icones/icones';
import { GridPage } from './../pages/grid/grid';
import { FabPage } from './../pages/fab/fab';
import { DateTimePage } from './../pages/date-time/date-time';
import { RangePage } from './../pages/range/range';
import { RadioPage } from './../pages/radio/radio';
import { CheckboxPage } from './../pages/checkbox/checkbox';
import { TesteJS } from './../pages/testejs/testejs';
import { CardPage } from './../pages/card/card';
import { BotoesPage } from './../pages/botoes/botoes';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from './../pages/home/home';
import { ListPage } from './../pages/list/list';
import { ActionsheetPage } from './../pages/actionsheet/actionsheet';
import { AlertPage } from './../pages/alert/alert';
import { BadgesPage } from './../pages/badges/badges';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = DateTimePage; // HomePage ion

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'ActionSheet', component: ActionsheetPage},
      { title: 'Alert', component: AlertPage},
      { title: 'Badges', component: BadgesPage},
      { title: 'Botões', component: BotoesPage},
      { title: 'Cards', component: CardPage},
      { title: 'Checkbox', component: CheckboxPage},
      { title: 'DateTime', component: DateTimePage},
      { title: 'Fab', component: FabPage},
      { title: 'Grid', component: GridPage},
      { title: 'Home', component: HomePage },
      { title: 'Http', component: CepPage},
      { title: 'Icones', component: IconesPage},
      { title: 'Input', component: InputPage},
      { title: 'List', component: ListPage },
      { title: 'Loading', component: LoadingPage},
      { title: 'Radio', component: RadioPage},
      { title: 'Range', component: RangePage},
      { title: 'Teste JS', component: TesteJS},
      { title: 'Toast', component: ToastPage},
      { title: 'Toggle', component: TogglePage},
      { title: 'Toolbar', component: ToolbarPage},
      { title: 'Segment', component: SegmentPage},
      { title: 'Tabs', component: TabsPage},
      { title: 'Select', component: SelectPage},
      { title: 'Navegação', component: PaginaPrincipalPage},
      { title: 'Storage', component: StoragePage},
      { title: 'HomeContact', component: HomeContactPage},
      { title: 'ModalPrincipal', component: ModalPrincipalPage},
      { title: 'Slides', component: SlidesPage},
      { title: 'Popover', component: PopoverPage},
      { title: 'Estilizacao', component: EstilizacaoPage},
      { title: 'Camera', component: CameraPage},
      { title: 'Teste PDF', component: TestePdfPage},
      { title: 'Barcode', component: BarcodePage},
      { title: 'Localizacao', component: LocalizacaoPage},
      { title: 'Animacao', component: AnimacaoPage},
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    // this.nav.setRoot(page.component);
    this.nav.push(page.component);
  }

  openPageLazyLoad(){
    this.nav.push('LazyLoadPage');
  }

  openFormularioPage(FormularioPage : String){
    this.nav.push('FormularioPage');

  }
}
