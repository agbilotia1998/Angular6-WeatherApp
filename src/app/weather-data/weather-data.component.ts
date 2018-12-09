import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { WeatherService } from "../weather.service";

@Component({
  selector: 'app-weather-data',
  templateUrl: './weather-data.component.html',
  styleUrls: ['./weather-data.component.css']
})
export class WeatherDataComponent implements OnInit {

  constructor(private weatherService: WeatherService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    let latitide = this.route.snapshot.queryParamMap.get('lat');
    let longitude = this.route.snapshot.queryParamMap.get('lon');
    let geometry = { lat: latitide, lon: longitude };
    this.weatherService.getData(geometry).subscribe(
      data => console.log(data)
    )
  }

}
