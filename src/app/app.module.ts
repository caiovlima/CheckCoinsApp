import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { ReminderPage } from '../pages/reminder/reminder';
import { NewsPage } from '../pages/news/news';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Allcoins } from '../classes/allcoins';

@NgModule({
  declarations: [
    MyApp,
    ReminderPage,
    NewsPage,
    HomePage,
    TabsPage
  ],
  imports: [
  BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ReminderPage,
    NewsPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Allcoins
  ]
})
export class AppModule {}
