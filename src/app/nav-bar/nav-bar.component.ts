import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  showDropDown = false;
  holidays;
  routTo: string;
  culture;

  constructor(
    private apiService: ApiService,
    public route: ActivatedRoute) {}

    getHolidays() {
      this.apiService.getHolidays().subscribe(data => {
        this.holidays = data;
      },
      err => console.log(err),
      () => console.log(`success`)
      );
    }

    getCulture() {
      this.apiService.getCulture().subscribe(data => {
        this.culture = data;
      },
      err => console.log(err),
      () => console.log(`success`)
      );
    }

  ngOnInit(): void {
    this.getHolidays();
    // get routes
    this.route.url.subscribe(params => {
      this.routTo = params[0]?.path;

      switch (this.routTo) {
        case 'culture':
          
          this.getCulture();
          break;

        default:
          //route to home

          break;
      }
    });
  }

  myCountry() {
    this.showDropDown = !this.showDropDown;
  };
}

  
  

