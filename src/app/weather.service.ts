import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/index";
import * as config from './config';
//
// @Injectable({
//   providedIn: 'root'
// })

const url = config.default.BASE_URL;
export class WeatherService {

  constructor(private http: HttpClient) { }

  getData(geometry: any): Observable<any>{
    return this.http.get(`${url}lat=${geometry.lat}&lon=${geometry.lon}`);
  }
}
