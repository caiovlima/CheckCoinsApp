import { Component } from '@angular/core';


import { HomePage } from '../home/home';
import { NewsPage } from '../news/news';
import { ReminderPage } from '../reminder/reminder';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = NewsPage;
  tab3Root = ReminderPage;

  constructor() {

  }
}
