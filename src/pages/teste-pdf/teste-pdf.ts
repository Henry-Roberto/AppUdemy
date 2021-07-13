import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage } from 'ionic-angular';

// import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer';
// import WebViewer from '@pdftron/webviewer';

@IonicPage()
@Component({
  selector: 'page-teste-pdf',
  templateUrl: 'teste-pdf.html',
})

export class TestePdfPage {
  // @ViewChild('viewer') viewerRef: ElementRef;
  private teste: boolean = false;
  constructor(//private document: DocumentViewer,
              ) {
  }

  // ngAfterViewInit(): void {
  //   WebViewer({
  //     path: '../../assets/lib',
  //     initialDoc: '../../assets/METODOLOGIA.pdf'
  //   }, this.viewerRef.nativeElement).then(instance =>{
  //   });
  // }

  ionViewDidLoad() {
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        this.teste = true;
     }
  }

  // openPdf(){
  //   console.log('entrou');
    
  //   const options: DocumentViewerOptions = {
  //     title: 'My PDF'
  //   }
    
  //   this.document.viewDocument('METODOLOGIA.pdf', 'application/pdf', options)
  // }

}
