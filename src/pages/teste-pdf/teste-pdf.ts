import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage } from 'ionic-angular';
// import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer';
import WebViewer from '@pdftron/webviewer';

@IonicPage()
@Component({
  selector: 'page-teste-pdf',
  templateUrl: 'teste-pdf.html',
})

export class TestePdfPage {
  @ViewChild('viewer') viewerRef: ElementRef;

  constructor(//private document: DocumentViewer,
              ) {
  }

  ngAfterViewInit(): void {
    WebViewer({
      path: '../../assets/lib',
      initialDoc: '../../assets/METODOLOGIA.pdf'
    }, this.viewerRef.nativeElement).then(instance =>{
    });
  }

  ionViewDidLoad() {
  }

  // openPdf(){
  //   console.log('entrou');
    
  //   const options: DocumentViewerOptions = {
  //     title: 'My PDF'
  //   }
    
  //   this.document.viewDocument('METODOLOGIA.pdf', 'application/pdf', options)
  // }

}
