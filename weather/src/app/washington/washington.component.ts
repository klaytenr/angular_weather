import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-washington',
  templateUrl: './washington.component.html',
  styleUrls: ['./washington.component.css']
})
export class WashingtonComponent implements OnInit {
  data: any;
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getInfo('washington');
  }
  getInfo(city){
    let info = this._httpService.getWeather(city);
    info.subscribe((data: any) => {
      this.data = data;
    })
  }
}
