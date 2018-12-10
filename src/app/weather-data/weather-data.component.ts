import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";

import { WeatherData } from "../weatherData";
import { WeatherService } from "../weather.service";

@Component({
  selector: 'app-weather-data',
  templateUrl: './weather-data.component.html',
  styleUrls: ['./weather-data.component.css'],
  providers: [WeatherService]
})

export class WeatherDataComponent implements OnInit {

  weatherData: WeatherData = <WeatherData>{
    // cityName: 'Surajgarh',
    // temperature: '21 °C',
    // min_temp: '20 °C',
    // max_temp:'22 °C',
    // humidity: '32',
    // description: 'Clear sky',
    // image: 'https://openweathermap.org/img/w/01n.png'
  };

  constructor(private weatherService: WeatherService,
              private route: ActivatedRoute,
              private router: Router,
              ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(data => {
      let latitude = data['lat'];
      let longitude = data['lon'];
      let geometry = { lat: latitude, lon: longitude };

      this.weatherService.getData(geometry).subscribe(
        data => {
          console.log(data);
          this.weatherData.cityName = data.name;
          this.weatherData.humidity = data.main.humidity;
          this.weatherData.image = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
          this.weatherData.description = data.weather[0].description;
          this.weatherData.min_temp = Number(Math.round((((parseInt(data.main.temp_min, 10)-273.15)*1)+0))) + "°C";
          this.weatherData.temperature = Number(Math.round((((parseInt(data.main.temp, 10)-273.15)*1)+0))) + "°C";
          this.weatherData.max_temp = Number(Math.round((((parseInt(data.main.temp_max, 10)-273.15)*1)+0))) + "°C";
          console.log(this.weatherData)
        }
      )
    })
  }

}
