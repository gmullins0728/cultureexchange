import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  // MapBox Access Token
  access_token =
    'pk.eyJ1IjoiZ211bGxpbnMwNzI4IiwiYSI6ImNrYjgzcHpwODAwZnAycHA1ZGZmeDhxN3cifQ.MquVqdfxBi_bYRV5-33IyA';

  // Calanderific API KEY
  holidayApiKey =
    '49f2edd5bf043a727f73649144947c6fc5aa7ebb7c856909112ef7a91a0f00b3';
  holidayBaseUrl = 'https://calendarific.com/api/v2/holidays';

  // Smithsonian API KEY
  cultureApiKey = 'VNxxwOeVfkefdMg8CvgxRyfFZRJife3c6D5FHa1v';
  // baseUrl = 'https://api.si.edu/openaccess/api/v1.0/category/history_culture/search';

  constructor(private http: HttpClient) {}

  getCountry() {
    const api = `https://api.mapbox.com/{endpoint}?access_token=${this.access_token}`;
    return this.http.get(api);
  }

  getTranslation() {
    const api = 'https://translation.googleapis.com/$discovery/rest?version=v3';
    return this.http.get(api);
  }

  getHoliday() {
    const api = `${this.holidayBaseUrl}?&api_key=${this.holidayApiKey}&country=US&year=2020`;
    // https://calendarific.com/api/v2/holidays?&api_key=49f2edd5bf043a727f73649144947c6fc5aa7ebb7c856909112ef7a91a0f00b3&country=US&year=2020
    return this.http.get(api);
  }

  getCulture() {
    const api = `https://api.si.edu/openaccess/api/v1.0/category/history_culture/search?${this.cultureApiKey}`;
    return this.http.get(api);
  }
}
