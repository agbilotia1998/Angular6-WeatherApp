import { Injectable } from '@angular/core';
import {Observable} from "rxjs/index";
import * as config from "./config";
import {HttpClient} from "@angular/common/http";

@Injectable()

export class WeatherService {
  private url = config.default.BASE_URL;
  constructor(private http: HttpClient) { }

  getData(geometry: any): Observable<any>{
    return this.http.get(`${this.url}lat=${geometry.lat}&lon=${geometry.lon}`);
  }
}

