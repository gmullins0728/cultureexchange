import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
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
  culture;
  home;
  selectedCountryId: number;
  countryList: Country[] = countryData;


  constructor(
    private apiService: ApiService, 
    public route: Router) {}


  ngOnInit(): void {
  
  }
  
  onSubmit(selectedCountryId) {
    this.selectedCountryId = selectedCountryId;
    console.log(selectedCountryId);
    this.route.navigate(['country'], { queryParams: {countryCode: selectedCountryId}});
  }

}
