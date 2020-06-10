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
import { ApiService } from '../api.service';
import { Loader, LoaderOptions } from 'google-maps';
import { Data } from '../data';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  location: any;
  translation: any;
  events: any;
  database: Data[];

  constructor(private apiService: ApiService) {
    this.apiService.getDataBase().subscribe((data) => {
      this.database = data;
      console.log(this.database);
    });

    this.apiService.getEvent().subscribe((data) => {
      this.events = data;
      console.log(this.events);
    });

    this.apiService.getTranslation().subscribe((data) => {
      this.translation = data;
      console.log(this.translation);
    });
  }

  async miMap() {
    const options: LoaderOptions = {};
    const loader = new Loader(
      'AIzaSyDKHFCMQiqFcNERDDcHqqcHRvNqZdqCLQU',
      options
    );

    const google = await loader.load();
    return new google.maps.Map(document.getElementById('map'), {
      center: { lat: 44.182205, lng: -84.506836 },
      zoom: 8,
    });
  }

  ngOnInit(): void {
    this.miMap();
  }
}
