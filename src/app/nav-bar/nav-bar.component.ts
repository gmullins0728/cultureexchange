import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { Country } from '../models/country';
import countryData from '../data/countries.json';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  holidays;
  routTo: string;
  culture;
  home;
  selectedCountryCode: string;
  countryList: Country[] = countryData;


  constructor(
    private apiService: ApiService, 
    public route: Router) {}

  getHome() {
    this.home = this.home;
  }

  getHolidays() {
    this.apiService.getHolidays().subscribe(
      (data) => {
        this.holidays = data;
      },
      (err) => console.log(err),
      () => console.log(`success`)
    );
  }

  getCulture() {
    this.apiService.getCulture().subscribe(
      (data) => {
        this.culture = data;
      },
      (err) => console.log(err),
      () => console.log(`success`)
    );
  }

  ngOnInit(): void {
  
  }
  
  onSubmit(selectedCountryCode) {
    this.selectedCountryCode = selectedCountryCode;
    console.log(selectedCountryCode);
    this.route.navigate(['country'], { queryParams: {countryCode: selectedCountryCode}});
  }

}
