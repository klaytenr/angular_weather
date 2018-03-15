import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-san-jose',
  templateUrl: './san-jose.component.html',
  styleUrls: ['./san-jose.component.css']
})
export class SanJoseComponent implements OnInit {
  data: any;
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getInfo('sunnyvale');
  }
  getInfo(city){
    let info = this._httpService.getWeather(city);
    info.subscribe((data: any) => {
      this.data = data;
    })
  }
}
