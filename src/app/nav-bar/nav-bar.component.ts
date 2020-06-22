import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Country } from '../models/country';
import countryData from '../data/countries.json';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  countryName: string;
  countryList: Country[] = countryData;



  constructor(public router: Router) {
      
    }


  ngOnInit(): void {
  
  }
  
  onSubmit() {
    this.router.navigate(['/country'], { fragment: this.countryName});

  }
}


