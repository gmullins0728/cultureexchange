import { Component, OnInit } from '@angular/core';
import { ApiService } from "../api.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  location: any;
  translation: any;
  events: any;

  constructor(private apiService: ApiService) {
    this.apiService.getLocation().subscribe((data) => {
      this.location = data;
      console.log(this.location);
    });
    this.apiService.getTranslation().subscribe((data) => {
      this.translation = data;
      console.log(this.translation);
    });

    this.apiService.getEvent().subscribe((data) => {
      this.events = data;
      console.log(this.events);
    });
  
  }

  ngOnInit(): void {}

}
