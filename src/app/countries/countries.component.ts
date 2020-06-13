import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {
  public countries;

  constructor(
    public route: ActivatedRoute,
    ) { }

    getCountries(): void {
      
    }

  ngOnInit(): void {
  }

}
