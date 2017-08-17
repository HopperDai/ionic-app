import {Component} from '@angular/core';

import {ContactPage} from '../contact/contact';
import {HomePage} from '../home/home';
import {PluginPage} from "../plugin/plugin";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = PluginPage;
  tab3Root = ContactPage;

  constructor() {

  }
}
