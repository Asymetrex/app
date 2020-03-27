import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {

  btc: Observable<any>;
  ltc: Observable<any>;
  doge: Observable<any>;
  xam: Observable<any>;
  aqua: Observable<any>;
  ath: Observable<any>;
  cx: Observable<any>;
  bitc: Observable<any>;
  bitcl: Observable<any>;
  mon2: Observable<any>;
  mon: Observable<any>;
  prkl: Observable<any>;
  ubq: Observable<any>;
  eoe: Observable<any>;
  xero: Observable<any>;
  doge2: Observable<any>;
  etho: Observable<any>;

  constructor(private http: HttpClient) {
    setInterval(() => {
      //Fetch BTC Base Pair Volume
      this.btc = this.http.get('https://asymetrex.com/api')
      this.btc.subscribe(data => {
        this.btc = data.btc_volume
      })

      //Fetch LTC Base Pair Volume
      this.ltc = this.http.get('https://asymetrex.com/api')
      this.ltc.subscribe(data => {
        this.ltc = data.ltc_volume
      })

      //Fetch LTC Base Pair Volume
      this.doge = this.http.get('https://asymetrex.com/api')
      this.doge.subscribe(data => {
        this.doge = data.doge_volume
      })

      //Fetch XAM/BTC
      this.xam = this.http.get('https://asymetrex.com/api/tickers/xambtc')
      this.xam.subscribe(data => {
        this.xam = data.ticker.volbtc
      })

      //Fetch AQUA/BTC
      this.aqua = this.http.get('https://asymetrex.com/api/tickers/aquabtc')
      this.aqua.subscribe(data => {
        this.aqua = data.ticker.volbtc
      })

      //Fetch ATH/BTC
      this.ath = this.http.get('https://asymetrex.com/api/tickers/athbtc')
      this.ath.subscribe(data => {
        this.ath = data.ticker.volbtc
      })

      //Fetch BITC/LTC/BTC
      this.bitc = this.http.get('https://asymetrex.com/api/tickers/bitcbtc')
      this.bitcl = this.http.get('https://asymetrex.com/api/tickers/bitcltc')
      this.bitc.subscribe(data => {
        this.bitc = data.ticker.volbtc
      })
      this.bitcl.subscribe(data => {
        this.bitcl = data.ticker.volbtc
      })

      //Fetch CX/BTC
      this.cx = this.http.get('https://asymetrex.com/api/tickers/cxbtc')
      this.cx.subscribe(data => {
        this.cx = data.ticker.volbtc
      })

      //Fetch DOGE/BTC
      this.doge = this.http.get('https://asymetrex.com/api/tickers/dogebtc')
      this.doge.subscribe(data => {
        this.doge = data.ticker.volbtc
      })

      //Fetch DOGE/LTC
      this.doge2 = this.http.get('https://asymetrex.com/api/tickers/dogeltc')
      this.doge2.subscribe(data => {
        this.doge2 = data.ticker.volbtc
      })

      //Fetch ETHO/BTC
      this.etho = this.http.get('https://asymetrex.com/api/tickers/ethobtc')
      this.etho.subscribe(data => {
        this.etho = data.ticker.volbtc
      })

      //Fetch MON/BTC
      this.mon = this.http.get('https://asymetrex.com/api/tickers/monbtc')
      this.mon.subscribe(data => {
        this.mon = data.ticker.volbtc
      })

      //Fetch MON/DOGE
      this.mon2 = this.http.get('https://asymetrex.com/api/tickers/mondoge')
      this.mon2.subscribe(data => {
        this.mon2 = data.ticker.volbtc
      })

      //Fetch PRKL/BTC
      this.prkl = this.http.get('https://asymetrex.com/api/tickers/prklbtc')
      this.prkl.subscribe(data => {
        this.prkl = data.ticker.volbtc
      })

      //Fetch UBQ/BTC
      this.ubq = this.http.get('https://asymetrex.com/api/tickers/ubqbtc')
      this.ubq.subscribe(data => {
        this.ubq = data.ticker.volbtc
      })

      //XERO/BTC
      this.xero = this.http.get('https://asymetrex.com/api/tickers/xerobtc')
      this.xero.subscribe(data => {
        this.xero = data.ticker.volbtc
      })

      //Fetch EOE/DOGE
      this.eoe = this.http.get('https://asymetrex.com/api/tickers/eoedoge')
      this.eoe.subscribe(data => {
        this.eoe = data.ticker.volbtc
      })
    }, 10000);
  }
}
