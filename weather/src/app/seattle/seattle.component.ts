import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-seattle',
  templateUrl: './seattle.component.html',
  styleUrls: ['./seattle.component.css']
})
export class SeattleComponent implements OnInit {
  data: any;
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getInfo('seattle');
  }
  getInfo(city){
    let info = this._httpService.getWeather(city);
    info.subscribe((data: any) => {
      this.data = data;
    })
  }
}
