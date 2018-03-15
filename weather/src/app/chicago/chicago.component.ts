import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-chicago',
  templateUrl: './chicago.component.html',
  styleUrls: ['./chicago.component.css']
})
export class ChicagoComponent implements OnInit {
  data: any;
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getInfo('chicago');
  }
  getInfo(city){
    let info = this._httpService.getWeather(city);
    info.subscribe((data: any) => {
      this.data = data;
    })
  }
}
