import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'exchangerateweb';
  //Obtener la fecha actual
  datenow = Date.now();
  //Array donde contiene toda la informacion
  dataExchange: [] = [];
  //Para segun el estado ocultar o visualizar una calculadora u otra
  hideBuySell = true;
  //Variables para la calculadora compra
  BuyCalc1 = 0;
  BuyCalc2 = 0;
  //Variables para la calculadora venta
  SellCalc1 = 0;
  SellCalc2 = 0;

  constructor (private http: HttpClient) {}

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.http.get("http://172.30.1.89:8072/business/GetExchangeRateWebSGIF").subscribe(data => {
      console.log(data);
      this.dataExchange = JSON.parse(JSON.stringify(data));
    }); 
  }

  changeBuyCalc1(e: any, SpanValue: any) {
    if (e.target.value != 0) {
      this.BuyCalc2 = SpanValue * e.target.value  
    } else {
      e.target.value = ''
      this.BuyCalc1 = e.target.value;
      this.BuyCalc2 = e.target.value;
    }    
  }

  changeBuyCalc2(e: any, SpanValue: any) {
    if (e.target.value != 0) {
      this.BuyCalc1 = e.target.value / SpanValue;
    } else {
      e.target.value = ''
      this.BuyCalc1 = e.target.value;
      this.BuyCalc2 = e.target.value;
    }
  }

  changeSellCalc1(e: any, SpanValue: any) {
    if (e.target.value != 0) {
      this.SellCalc2 = e.target.value / SpanValue;
    } else {
      e.target.value = ''
      this.SellCalc1 = e.target.value;
      this.SellCalc2 = e.target.value;
    }
  }

  changeSellCalc2(e: any, SpanValue: any) {
    if (e.target.value != 0) {
      this.SellCalc1 = SpanValue * e.target.value  
    } else {
      e.target.value = ''
      this.SellCalc1 = e.target.value;
      this.SellCalc2 = e.target.value;
    }    
  }
  
  resetAll() {
    this.BuyCalc1 = 0;
    this.BuyCalc2 = 0;
    this.SellCalc1 = 0;
    this.SellCalc2 = 0;
  }
}
