import {Component, ViewChild, ElementRef} from '@angular/core';
import {NavController, MenuController, Searchbar} from 'ionic-angular';

// import {TabsPage} from "../tabs/tabs";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  // rootPage: any = TabsPage;
  @ViewChild('searchbar') searchBar: Searchbar;

  constructor(public navCtrl: NavController) {
  }

  ionViewDidEnter() {
    // console.log(this.searchBar.nativeElement);
    // this.searchBar.setFocus();
    setTimeout(() => {
      this.searchBar.setFocus();
    });
  }

}
