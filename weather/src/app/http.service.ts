import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

  constructor(private _http: HttpClient) { }
  getWeather(city){
    return this._http.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&&appid=6a070cde886c87c6a3d53cd8c8c10ed8`);
  }
}
