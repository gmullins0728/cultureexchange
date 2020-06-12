import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-holidays',
  templateUrl: './holidays.component.html',
  styleUrls: ['./holidays.component.css'],
})
export class HolidaysComponent implements OnInit {
  holidays: any;
  constructor(
    private apiService: ApiService, 
    public route: ActivatedRoute) {}

  ngOnInit(): void {
    this.apiService.getHolidays().subscribe((data) => {
      this.holidays = data;
      console.log(this.holidays);
    });
  }
}
