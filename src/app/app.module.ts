import {NgModule, ErrorHandler} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';

import {ContactPage} from '../pages/contact/contact';
import {HomePage} from '../pages/home/home';
import {PluginPage} from "../pages/plugin/plugin";
import {TabsPage} from '../pages/tabs/tabs';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {NativeService} from "../providers/NativeService";
import {IonicStorageModule} from '@ionic/storage';
import {LoginPageModule} from "../pages/login/login.module";

@NgModule({
  declarations: [
    MyApp,
    ContactPage,
    HomePage,
    PluginPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      mode: 'ios',
      backButtonText: ''
    }),
    IonicStorageModule.forRoot(),
    LoginPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ContactPage,
    HomePage,
    PluginPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    NativeService,
  ]
})
export class AppModule {
}
