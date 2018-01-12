import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { CryptoCoin } from './../classes/cryptocoin';
import { AllCoins } from './../classes/allcoins';

@Injectable()
export class HttpSender {
    query = "https://min-api.cryptocompare.com/data/price?fsym=";

    
    constructor(private http:Http, private allCoins: AllCoins) {

    }

    getSingleData(cointype: CryptoCoin){
        if(cointype != null)
            return this.http.get(this.query + cointype.shortName + '&tsyms=,USD,EUR,BRL')
        else
            return this.http.get(this.query + 'BTC&tsyms=,USD,EUR,BRL')
    }
}
