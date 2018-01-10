import { CryptoCoin } from './cryptocoin';

export class Allcoins {
    coins: CryptoCoin[] = [];

    constructor(){
        this.coins.push(new CryptoCoin('ETH', 'Ethereum'));
        this.coins.push(new CryptoCoin('BTC', 'BitCoin'));
        this.coins.push(new CryptoCoin('LTC', 'LiteCoin'));

    }

    GetCoins(){
        return this.coins;
    }

}
