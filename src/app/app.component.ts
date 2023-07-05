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
      if (!this.searchQuery || this.searchQuery.trim() === '') {
        return;
      }
    this.apiService.advancedSearch(this.searchQuery).subscribe(
      (response) => {
        // this.movies = response.results;
        
        
        this.movies = response.results.filter(
          (movie: any) => movie.imageurl && movie.imageurl.length > 0
        );
        console.log(this.movies);
      },
      (error) => {
        console.error('API Error:', error);
        // Handle the error case
      }
    );
  }
}
