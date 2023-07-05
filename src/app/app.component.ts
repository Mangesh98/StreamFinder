import { Component } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'StreamFinder';
  searchQuery: string = '';
  movies: any[] | undefined;

  constructor(private apiService: ApiService) {}

  searchMovies() {
    this.apiService.advancedSearch(this.searchQuery).subscribe(
      (response) => {
        this.movies = response.results;
      },
      (error) => {
        console.error('API Error:', error);
        // Handle the error case
      }
    );
  }
}
