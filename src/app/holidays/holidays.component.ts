import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-holidays',
  templateUrl: './holidays.component.html',
  styleUrls: ['./holidays.component.css'],
})
export class HolidaysComponent implements OnInit {
  holidays: any[];
  holidayCopy: any[];
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getHolidays().subscribe((data: any) => {
      this.holidays = data.response.holidays;
      this.holidayCopy = data.response.holidays;
      console.log('data', this.holidays);
    });
  }

  myFunction(val): void {
    console.log('holidays', this.holidays);
    let results = this.holidays.filter((holiday) => val === holiday.country.name);
    if (results.length > 0) {
      this.holidays = results;
    } else {
      this.holidays = this.holidayCopy;
    }
    console.log('results', results);
  }
}
