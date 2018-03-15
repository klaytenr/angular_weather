import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-burbank',
  templateUrl: './burbank.component.html',
  styleUrls: ['./burbank.component.css']
})
export class BurbankComponent implements OnInit {
  data: any;
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getInfo('burbank');
  }
  getInfo(city){
    let info = this._httpService.getWeather(city);
    info.subscribe((info: any) => {
      console.log(info);
      this.data = info;
    })
  }
}
