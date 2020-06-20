import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-holidays',
  templateUrl: './holidays.component.html',
  styleUrls: ['./holidays.component.css'],
})
export class HolidaysComponent implements OnInit {
  holidays: any[] = [];
  holidayCopy: any[] = [];
  dayArray: string[] = [];
  constructor(private route: ActivatedRoute, private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getHolidays().subscribe((data: any) => {
      this.holidays = data.response.holidays;
      this.holidayCopy = data.response.holidays;

      this.dayArray = this.holidays.map((h) => h?.date?.iso);
      // console.log('data', this.holidays);
    });
  }

  myFunction(val): void {
    //console.log('holidays', this.holidays);
    console.log(val.key);
    let results = this.holidays.filter((holiday) =>
      holiday.country.name.includes(val.key)
    );
    if (results.length > 0) {
      this.holidays = results;
    } else {
      this.holidays = this.holidayCopy;
    }
    console.log('results', results);
  }

  getDays(val): any {
    // console.log('days', new Date(this.holidays[0].date.iso).getTime());

      let results = this.holidays.sort((d1, d2) => {
      let dateA = new Date(d1?.date?.iso);
      let dateB = new Date(d2?.date?.iso);
      return dateA < dateB ? -1 : dateA > dateB ? 1 : 0;
    });

    if (results.length > 0) {
      this.holidays = results.sort();
    }
  }
}
