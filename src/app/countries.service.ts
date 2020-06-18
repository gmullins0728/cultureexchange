import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { Country } from './country';
import { Countries } from './countries';
import { MessageService } from './message.service';

@Injectable({
    providedIn: 'root',
})
export class CountriesService {

    constructor(private messageService: MessageService) { }

    getCountries(): Observable<Country[]> {
      // TODO: send the message _after_ fetching the countries
        this.messageService.add('CountriesService: fetched countries');
        return of(Countries);
    }

    getCountry(id: number | string) {
        return this.getCountries().pipe(
        // (+) before `id` turns the string into a number
        map((countries: Country[]) => countries.find(country => country.id === +id))
        );
    }
}