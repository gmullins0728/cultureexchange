import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-holidays',
  templateUrl: './holidays.component.html',
  styleUrls: ['./holidays.component.css'],
})
export class HolidaysComponent implements OnInit {
  holidays: any[];
  holidayCopy: any[];
  dayArray: any[];
  constructor(private route: ActivatedRoute, private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getHolidays().subscribe((data: any) => {
      this.holidays = data.response.holidays;
      this.holidayCopy = data.response.holidays;
      console.log('data', this.holidays);
    });
  }

  myFunction(val): void {
    console.log('holidays', this.holidays);
    let results = this.holidays.filter(
      (holiday) => val === holiday.country.name
    );
    if (results.length > 0) {
      this.holidays = results;
    } else {
      this.holidays = this.holidayCopy;
    }
    console.log('results', results);
  }

  // getDays(val): any {
  //   console.log('days', this.holidays);
  //   let results = this.holidays.sort((a:any, b:any) => {
  //     console.log('a', a);
  //     console.log('b', b);
  //   });
  //   console.log('results', results);
  // if (results.length > 0) {
  //   this.holidays = results.sort();
  // }
  // }
}
