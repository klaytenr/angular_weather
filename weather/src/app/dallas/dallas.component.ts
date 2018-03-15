import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-dallas',
  templateUrl: './dallas.component.html',
  styleUrls: ['./dallas.component.css']
})
export class DallasComponent implements OnInit {
  data: any;
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getInfo('dallas');
  }
  getInfo(city){
    let info = this._httpService.getWeather(city);
    info.subscribe((data: any) => {
      this.data = data;
    })
  }
}
