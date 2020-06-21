import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  country = countryData;
  countryName: string;
  countryList: Country[] = countryData;
  public fragment: string;


  constructor(public route: ActivatedRoute, public router: Router) {
    // this.countryName = this.countryName;
    // this.route.fragment.subscribe ( name => {
    //   const country= document.querySelector ( "#" + name )
    //   if ( country ) country.scrollIntoView ( this.country.name )
    // });
      
    }


  ngOnInit(): void {
  
  }
  
  onClick(countryName) {
    this.countryName = countryName;
    console.log(countryName);
    this.router.navigate(['/country'], { queryParams: {countryName}});
    // this.router.navigate(['/country'], { fragment: 'this.country.name'});
    // this.route.fragment.subscribe ( countryName => {
    //   const country= document.querySelector ( "#" + countryName )
    //   if ( country ) country.scrollIntoView ( this.country.name )
    // });
    // this.router.navigate(['/country'], { fragment: '{{country.name}}'});

  }
}


