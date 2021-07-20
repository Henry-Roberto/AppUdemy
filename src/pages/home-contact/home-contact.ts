import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
// import { ContactProvider, Contact, ContactList} from '../../providers/contact/contact';

@IonicPage()
@Component({
  selector: 'page-home-contact',
  templateUrl: 'home-contact.html',
})
export class HomeContactPage {
  // contacts: ContactList[];

  // constructor(public navCtrl: NavController,
  //             private contactProvider: ContactProvider,
  //             private toastCtrl: ToastController) {
  // }

  // ionViewDidEnter() {
  //   this.contactProvider.getAll()
  //   .then(results => {
  //     this.contacts = results;
  //   })
  // }

  // addContact(){
  //   this.navCtrl.push('EditContactPage');
  // }

  // editContact(item: ContactList) {
  //   this.navCtrl.push('EditContactPage', { key: item.key, contact: item.contact });
  // }

  // removeContact(item: ContactList) {
  //   this.contactProvider.remove(item.key)
  //   .then(() => {
  //     let index = this.contacts.indexOf(item);
  //     this.contacts.slice(index, 1);

  //     this.toastCtrl.create({ message: 'Contato removido.', duration: 3000, position: 'botton' }).present();
  //   })
  // }

}
