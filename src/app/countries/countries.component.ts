import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import countryData from '../data/countries.json';
import { Country } from '../models/country';


@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {
  countryName: string;
  country = countryData;
  countryList: Country[] = countryData;
  public fragment: string;
  

  constructor(
    public route: ActivatedRoute,
    public router: Router) {
      this.countryName = this.countryName;

      // Navigate to Culture Component to their respectable section
      this.route.fragment.subscribe ( name => {
        const country= document.querySelector ( "#" + name )
        if ( country ) country.scrollIntoView ( this.country.name )
      });
      
    }

    getCountries(): void {
      
    }

  ngOnInit(): void {
    this.router.navigate( ['/culture', this.country.name ], {fragment: 'country.name'});
  
  }

}
