import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  // Calanderific API KEY
  holidayApiKey =
    '49f2edd5bf043a727f73649144947c6fc5aa7ebb7c856909112ef7a91a0f00b3';
  holidayBaseUrl = 'https://calendarific.com/api/v2/holidays';

  constructor(private http: HttpClient) {}

  // getTranslation() {
  //   const api = 'https://translation.googleapis.com/$discovery/rest?version=v3?key=';
  //   return this.http.get(api);
  // }

  getHolidays() {
    const api = `${this.holidayBaseUrl}?&api_key=${this.holidayApiKey}&country=US&month=7&year=2020`;
    return this.http.get(api);
  }

  getCulture() {
    const api =
      'https://data.opendatasoft.com/api/records/1.0/search/?dataset=world-heritage-list%40public-us&facet=category&facet=region&facet=states';
    // const api = 'https://data.opendatasoft.com/api/records/1.0/search/?dataset=world-heritage-list%40public-us&facet=category&facet=region&facet=states&refine.states=China'
    return this.http.get(api);
  }
}
