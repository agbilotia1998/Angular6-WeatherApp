import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InputLocationComponent } from "./input-location/input-location.component";
import { WeatherDataComponent } from "./weather-data/weather-data.component";
import { AppComponent } from "./app.component";

const routes: Routes = [
  { path: 'weather', component: WeatherDataComponent }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
