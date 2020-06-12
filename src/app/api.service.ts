import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  // Calanderific API KEY
  holidayApiKey = '49f2edd5bf043a727f73649144947c6fc5aa7ebb7c856909112ef7a91a0f00b3';
  holidayBaseUrl = 'https://calendarific.com/api/v2/holidays';

  // Smithsonian API KEY
  cultureApiKey = 'VNxxwOeVfkefdMg8CvgxRyfFZRJife3c6D5FHa1v';
  cultureBaseUrl = 'https://api.si.edu/openaccess/api/v1.0/category/history_culture/search';

  constructor(private http: HttpClient) {}

  getTranslation() {
    const api = 'https://translation.googleapis.com/$discovery/rest?version=v3';
    return this.http.get(api);
  }

  getHolidays() {
    const api = `${this.holidayBaseUrl}?&api_key=${this.holidayApiKey}&country=US&year=2020`;
    return this.http.get(api);
  }

  getCulture() {
    const api = `${this.cultureBaseUrl}?api_key=${this.cultureApiKey}&q=history&location=US`;
    return this.http.get(api);
  }
}
