import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-holidays',
  templateUrl: './holidays.component.html',
  styleUrls: ['./holidays.component.css'],
})
export class HolidaysComponent implements OnInit {
  apiService: any;
  holidays: any;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.apiService.getHolidays().subscribe((data) => {
      this.holidays = data;
      console.log(this.holidays);
    });
  }
}
