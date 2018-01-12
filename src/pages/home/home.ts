import { Component, Output } from '@angular/core';
import { NavController } from 'ionic-angular';

import { HttpSender } from './../../services/HttpSender';

import { CryptoCoin } from './../../classes/cryptocoin';
import { AllCoins } from './../../classes/allcoins';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @Output() currentCoin: CryptoCoin = new CryptoCoin('BTC', 'BitCoin');

  coins: CryptoCoin[] = [];
  allcoins: AllCoins = new AllCoins();

  constructor(public navCtrl: NavController,
              private http:HttpSender) {

    for(let i = 0; i < this.allcoins.coins.length; i++){
      this.coins.push(this.allcoins.coins[i]);
    }
    this.UpdatePage();
  }

  selectedCoinType(index: number){
    this.currentCoin = this.coins[index];
    this.UpdatePage();

  }

  UpdatePage(){
    this.http.getSingleData(this.currentCoin).subscribe((response) => {
      const data = response.json();

      if(data != ''){
        this.currentCoin.euroValue = data['EUR'];
        this.currentCoin.usdValue = data['USD'];
        this.currentCoin.brlValue = data['BRL'];
      }

    }, (error)=>{});
  }

  refreshPage(){
    this.UpdatePage();
  }

}
