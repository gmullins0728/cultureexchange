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
    let results = this.holidays.filter((holiday) => val === holiday.country.name);
    if (results.length > 0) {
      this.holidays = results;
    } else {
      this.holidays = this.holidayCopy;
    }
    console.log('results', results);
    // this.holidays = results;
    // let input, filter, table, tr, td, i, txtValue;
    // input = document.getElementById('myInput');
    // filter = input.value.toUpperCase();
    // table = document.getElementById('myTable');
    // tr = table.getElementsByTagName('tr');
    // for (i = 0; i < tr.length; i++) {
    //   td = tr[i].getElementsByTagName('td')[0];
    //   if (td) {
    //     txtValue = td.textContent || td.innerText;
    //     if (txtValue.toUpperCase().indexOf(filter) > -1) {
    //       tr[i].style.display = '';
    //     } else {
    //       tr[i].style.display = 'none';
    //     }
    //   }
    // }
  }
}
