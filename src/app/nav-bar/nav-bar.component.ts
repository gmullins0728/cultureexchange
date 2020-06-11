import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  showDropDown = false;

  constructor() {}

  ngOnInit(): void {}

  myCountry() {
    this.showDropDown = !this.showDropDown;
  }
}
