import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Loading, LoadingController } from 'ionic-angular';

@Injectable()
export class LoadingProvider {
  loading: Loading;

  constructor(public loadingCtrl: LoadingController) 
              { }

  presentComMensagem(mensagem){
    this.loading = this.loadingCtrl.create({
      content: mensagem
    })

    return this.loading.present();
  }

  dismiss(){

    return new Promise((resolve, reject) => {
      if(this.loading){
        return this.loading.dismiss(resolve(true)).catch(error => {
          console.log(error);
        });
      } else{
        resolve(true);
      }
    })

  }

}
