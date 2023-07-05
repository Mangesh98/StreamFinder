import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'https://ott-details.p.rapidapi.com/search';
  private headers = new HttpHeaders({
    'X-RapidAPI-Key': '7e6fe740d0msh2383a1462c9f3ecp1405aejsnb3ad2619babc',
    'X-RapidAPI-Host': 'ott-details.p.rapidapi.com',
  });

  constructor(private http: HttpClient) {}

  advancedSearch(title: string): Observable<any> {
    const params = new HttpParams().set('title', title).set('page', '1');

    return this.http.get<any>(this.apiUrl, { headers: this.headers, params });
  }
  getStreamingInfo(imdbid: string): Observable<any> {
    let apiUrl = 'https://ott-details.p.rapidapi.com/gettitleDetails';
    const params = new HttpParams().set('imdbid', imdbid);

    return this.http.get<any>(apiUrl, { headers: this.headers, params });
  }
}