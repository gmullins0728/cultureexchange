import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  showDropDown = false;

  


  constructor() {} 

  
    ngOnInit(): void {
      
  }
  myCountry() {
    this.showDropDown = !this.showDropDown;
  }
  
}
