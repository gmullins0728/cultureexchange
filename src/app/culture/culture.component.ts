import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ActivatedRoute } from '@angular/router';
import { Country } from '../models/country';
import countryData from '../data/countries.json';

@Component({
  selector: 'app-culture',
  templateUrl: './culture.component.html',
  styleUrls: ['./culture.component.css'],
})
export class CultureComponent implements OnInit {
  culture;
  selectedCountryCode: string;
  countryList: Country[] = countryData;


  constructor(
    private apiService: ApiService, 
    public route: ActivatedRoute) {
      this.selectedCountryCode = this.selectedCountryCode;
      console.log(this.selectedCountryCode);
  }
    
    

  ngOnInit(): void {
    
  }

}
