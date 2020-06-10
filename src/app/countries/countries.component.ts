import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {
  public countries;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService
    ) { }

    getCountries(): void {
      
    }

  ngOnInit(): void {
  }

}
