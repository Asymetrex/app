import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private http: HttpClient) {
    //Fetch Base Pair Volume
    this.http.get('https://asymetrex.com/api').subscribe((response) => {
      this.btc = response.btc_volume
      this.ltc = response.ltc_volume
      this.doge = response.doge_volume
    });

    //Fetch BITC/LTC
    this.http.get('https://asymetrex.com/api/tickers/bitcltc').subscribe((response) => {
      this.bitc = response.ticker.vol
    });

    //Fetch BITC/BTC
    this.http.get('https://asymetrex.com/api/tickers/bitcbtc').subscribe((response) => {
      this.bitc2 = response.ticker.vol
    });
  }
  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }
}
