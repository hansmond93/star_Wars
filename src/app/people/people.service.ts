import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { IPagination } from '../shared/model/pagination';
import { IPeople } from '../shared/model/people';
import { Observable } from 'rxjs';
import { PeopleParams } from '../shared/model/peopleParams';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  baseUrl = environment.starWarsApiBaseUrl;

  constructor(private http: HttpClient) { }

  getPeople(peopleParams: PeopleParams): Observable<IPagination> {
    let params = new HttpParams();

    if (peopleParams.search) {
      params = params.append('search', peopleParams.search);
    }

    params = params.append('page', peopleParams.pageNumber.toString());
    console.log(params);
    return this.http.get<IPagination>(this.baseUrl + 'people', {observe: 'response', params})
    .pipe(
      map(response => {
        const people = response.body.results;
        people.forEach((person) => {
          this.mapId(person);
        });
        return response.body;
      })
    );
  }

  private mapId(person: IPeople): void {
    const url = person.url;
    if (url && url !== '') {
      const words = url.split('/');
      if (words.length >= 5) {
        person.id = words[5]; // 5th index holds the id after splitting
      }
    }
  }
}
