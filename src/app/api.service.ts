import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // Google API_KEY
googleApiKey = 'AIzaSyDKHFCMQiqFcNERDDcHqqcHRvNqZdqCLQU';

// Google Map API URL
mapApiUrl = `https://maps.googleapis.com/maps/api/js?key=${this.googleApiKey}&callback=initMap`;

// Google Translate API URL
translateApiUrl = `https://translation.googleapis.com/$discovery/rest?version=v3`;

// Eventful API KEY & API URL
eventApiKey = 'S7N4hXRm85fgzH7G';
eventApiUrl = 'http://api.eventful.com/rest/';

  constructor(private http: HttpClient) { }

  getCulture(): Observable
}
