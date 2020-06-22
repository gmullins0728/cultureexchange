import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import countryData from '../data/countries.json';
import { Country } from '../models/country';


@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {
  country = countryData;
  countryList: Country[] = countryData;
  
  

  constructor(public router: Router) {
    
    }

    getCountries(): void {
      
    }

  ngOnInit(): void {
    this.router.navigate( ['/culture', this.country.name ], {fragment: 'country.name'});
  
  }

}
