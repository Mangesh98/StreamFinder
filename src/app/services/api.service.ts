import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'https://ott-details.p.rapidapi.com/search';
  private headers = new HttpHeaders({
    'X-RapidAPI-Key': 'f92a950fc5mshef28155d21da392p12bd45jsn7cfc9abe2126',
    'X-RapidAPI-Host': 'ott-details.p.rapidapi.com',
  });

  constructor(private http: HttpClient) {}

  advancedSearch(title:string): Observable<any> {
    const params = new HttpParams().set('title', title).set('page', '1');

    return this.http.get<any>(this.apiUrl, { headers: this.headers, params });
  }
}