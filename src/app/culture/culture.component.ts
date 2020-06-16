import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-culture',
  templateUrl: './culture.component.html',
  styleUrls: ['./culture.component.css'],
})
export class CultureComponent implements OnInit {
  culture;

  constructor(private apiService: ApiService, public route: ActivatedRoute) {}

  ngOnInit(): void {
    this.apiService.getCulture().subscribe((data) => {
      this.culture = data;
      console.log(this.culture);
      console.log(this.culture.facet_groups[1].facets[0].name);
      console.log(this.culture.records[0].fields.short_description);
    });
  }
}
