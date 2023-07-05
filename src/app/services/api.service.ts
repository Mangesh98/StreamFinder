import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = environment.SEARCH_API_URL;
  private headers = new HttpHeaders({
    'X-RapidAPI-Key': environment.API_KEY,
    'X-RapidAPI-Host': environment.API_HOST_KEY,
  });

  constructor(private http: HttpClient) {}

  advancedSearch(title: string): Observable<any> {
    const params = new HttpParams().set('title', title).set('page', '1');

    return this.http.get<any>(this.apiUrl, { headers: this.headers, params });
  }
  getStreamingInfo(imdbid: string): Observable<any> {
    let apiUrl = environment.STREMING_API_URL;
    const params = new HttpParams().set('imdbid', imdbid);

    return this.http.get<any>(apiUrl, { headers: this.headers, params });
  }
}
