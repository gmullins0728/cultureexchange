import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Country } from '../models/country';


@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {
  @Input() countryList: Country;
  countryCode: string;

  constructor(public route: ActivatedRoute,) {
      this.route.queryParams.subscribe(params => {
      this.countryCode = params["countryCode"];
      }) 
      console.log("This is the country code", this.countryCode);
    }

    getCountries(): void {
      
    }

  ngOnInit(): void {
  }

}
