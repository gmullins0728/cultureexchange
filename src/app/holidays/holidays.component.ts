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
  holidays: any;

  constructor(private route: ActivatedRoute, private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getHolidays().subscribe((data) => {
      this.holidays = data;
      console.log(this.holidays.response.holidays);
      console.log(this.holidays.response.holidays[0].name);
    });
  }
}

// https://calendarific.com/api/v2/holidays?&api_key=49f2edd5bf043a727f73649144947c6fc5aa7ebb7c856909112ef7a91a0f00b3&country=KR&year=2020
// For above, get the country code for the countries that we have picked
