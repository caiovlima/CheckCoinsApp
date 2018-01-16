import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { LoadingProvider } from '../../providers/loading/loading';

@Component({
  selector: 'page-news',
  templateUrl: 'news.html'
})
export class NewsPage {

  constructor(public navCtrl: NavController,
              public loading: LoadingProvider) {

  }

  change(segmento){
    this.loading.presentComMensagem('Carregando Notícias');

    if(segmento === 'ing'){
      this.loading.dismiss();

    } else{
      

    }
    this.loading.dismiss();
  }

}
