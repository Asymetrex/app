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
    setInterval(() => {
      //Fetch Base Pair Volume
      this.http.get('https://asymetrex.com/api').subscribe((response) => {
        this.btc = response.btc_volume
        this.ltc = response.ltc_volume
        this.doge = response.doge_volume
      });

      //Fetch XAM/BTC
      this.http.get('https://asymetrex.com/api/tickers/xambtc').subscribe((response) => {
        this.xam = response.ticker.volbtc
      });

      //Fetch AQUA/BTC
      this.http.get('https://asymetrex.com/api/tickers/aquabtc').subscribe((response) => {
        this.aqua = response.ticker.volbtc
      });

      //Fetch ATH/BTC
      this.http.get('https://asymetrex.com/api/tickers/athbtc').subscribe((response) => {
        this.ath = response.ticker.volbtc
      });

      //Fetch BITC/LTC
      this.http.get('https://asymetrex.com/api/tickers/bitcltc').subscribe((response) => {
        this.bitc = response.ticker.volbtc
      });

      //Fetch CX/BTC
      this.http.get('https://asymetrex.com/api/tickers/cxbtc').subscribe((response) => {
        this.cx = response.ticker.volbtc
      });

      //Fetch DOGE/BTC
      this.http.get('https://asymetrex.com/api/tickers/dogebtc').subscribe((response) => {
        this.doge = response.ticker.volbtc
      });

      //Fetch DOGE/LTC
      this.http.get('https://asymetrex.com/api/tickers/dogeltc').subscribe((response) => {
        this.doge2 = response.ticker.volbtc
      });

      //Fetch ETHO/BTC
      this.http.get('https://asymetrex.com/api/tickers/ethobtc').subscribe((response) => {
        this.etho = response.ticker.volbtc
      });

      //Fetch MON/BTC
      this.http.get('https://asymetrex.com/api/tickers/monbtc').subscribe((response) => {
        this.mon = response.ticker.volbtc
      });

      //Fetch MON/DOGE
      this.http.get('https://asymetrex.com/api/tickers/mondoge').subscribe((response) => {
        this.mon2 = response.ticker.volbtc
      });

      //Fetch PRKL/BTC
      this.http.get('https://asymetrex.com/api/tickers/prklbtc').subscribe((response) => {
        this.prkl = response.ticker.volbtc
      });

      //Fetch UBQ/BTC
      this.http.get('https://asymetrex.com/api/tickers/ubqbtc').subscribe((response) => {
        this.ubq = response.ticker.volbtc
      });

      //Fetch XERO/BTC
      this.http.get('https://asymetrex.com/api/tickers/xerobtc').subscribe((response) => {
        this.xero = response.ticker.volbtc
      });

      //Fetch EOE/DOGE
      this.http.get('https://asymetrex.com/api/tickers/eoedoge').subscribe((response) => {
        this.eoe = response.ticker.volbtc
      });
    }, 6000);
  }
}
