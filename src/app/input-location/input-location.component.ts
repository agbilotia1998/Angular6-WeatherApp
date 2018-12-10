import { Component, OnInit } from '@angular/core';
import {Address} from "ngx-google-places-autocomplete/objects/address";
import { Location } from "@angular/common";
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-input-location',
  templateUrl: './input-location.component.html',
  styleUrls: ['./input-location.component.css']
})
export class InputLocationComponent implements OnInit {

  constructor(private location: Location,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

  handleAddressChange(address: Address): void {
    this.router.navigate(['/weather'], {
      queryParams: { lat: address.geometry.location.lat(), lon: address.geometry.location.lng()},
      relativeTo: this.activatedRoute
    }).catch(e => console.log(e))
    // console.log(address.geometry.location.lat(), address.geometry.location.lng());
  }
}
