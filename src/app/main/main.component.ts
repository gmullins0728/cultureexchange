// var i = 0;
// // Start point above for slideshow
// var images = [];
// var time = 5000;

// // Image list
// images[0] = 'image1.jpg';
// images[1] = 'image2.jpg';

// //change image function
// function changeImg() {
//   document.slide.src = images[i];

//   if (i < images.length - 1) {
//     i++;
//   } else {
//     i = 0;
//   }

//   setTimeout('changeImg()', time);
// }

// window.onload = changeImg;

import { Component, OnInit } from '@angular/core';
import { ApiService } from "../api.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  // createCountries() {
  //   const countries = [
  //     { id: 1, name: 'US'},
  //     { id: 2, name: 'Mexico'},
  //     { id: 3, name: 'France'},
  //     { id: 4, name: 'Germany'},
  //     { id: 5, name: 'Italy'},
  //     { id: 6, name: 'S. Korea'},
  //     { id: 7, name: 'Japan'},
  //     { id: 8, name: 'China'}
  //   ];
  // }
  translation: any;
  


  constructor(private apiService: ApiService) {
    // this.apiService.getCountry().subscribe((data) => {
    //   this.country = data;
    //   console.log(this.country);
    // });

    // this.apiService.getTranslation().subscribe((data) => {
    //   this.translation = data;
    //   console.log(this.translation);
    // });

  


    
  } 
    

    
  

  ngOnInit(): void {
  }
}
