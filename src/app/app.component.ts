import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'exchangerateweb';
  datenow = Date.now();
  dataExchange: [] = [];

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
}
