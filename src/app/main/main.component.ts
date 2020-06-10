import { Component, OnInit } from '@angular/core';
import { ApiService } from "../api.service";


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  // createCountries() {
  //   const countries = [
  //     { id: 1, name: 'US'},
  //     { id: 2, name: 'Mexico'},
  //     { id: 3, name: 'France'},
  //     { id: 4, name: 'Germany'},
  //     { id: 5, name: 'Italy'},
  //     { id: 6, name: 'S. Korea'},
  //     { id: 7, name: 'Japan'},
  //     { id: 8, name: 'China'}
  //   ];
  // }
  translation: any;
  holiday: any;
  culture: any;


  constructor(private apiService: ApiService) {
    // this.apiService.getCountry().subscribe((data) => {
    //   this.country = data;
    //   console.log(this.country);
    // });

    // this.apiService.getTranslation().subscribe((data) => {
    //   this.translation = data;
    //   console.log(this.translation);
    // });

    this.apiService.getHoliday().subscribe((data) => {
      this.holiday = data;
      console.log(this.holiday);
    });

    // this.apiService.getCulture().subscribe((data) => {
    //   this.culture = data;
    //   console.log(this.culture);
    // });
  } 
    

    
  

  ngOnInit(): void {
  

  }
  

}
