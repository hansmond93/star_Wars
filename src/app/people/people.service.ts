import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { IPagination } from '../shared/model/pagination';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  baseUrl = environment.starWarsApiBaseUrl;

  constructor(private http: HttpClient) { }

  getPeople() {
    return this.http.get<IPagination>(this.baseUrl + 'people');
  }
}
