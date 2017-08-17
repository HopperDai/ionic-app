import {Component} from '@angular/core';
import {NavController, MenuController} from 'ionic-angular';
// import {TabsPage} from "../tabs/tabs";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  // rootPage: any = TabsPage;

  constructor(public navCtrl: NavController,
              public menuCtrl: MenuController) {
    // menuCtrl.enable(true);
  }

}
