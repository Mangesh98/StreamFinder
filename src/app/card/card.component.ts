import { Component, Input } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input() movie: any;
  showStreamingDetails: boolean = false;
  streamingData: any[] = [];

  constructor(private apiService: ApiService) {}

  toggleStreamingDetails() {
    if (this.showStreamingDetails) {
      this.showStreamingDetails = false;
    } else {
      this.getStreamingInfo(this.movie.imdbid);
    }
  }

  getStreamingInfo(imdbId: string) {
    this.apiService.getStreamingInfo(imdbId).subscribe((data: any) => {
      
      const { streamingAvailability } = data;
      if (
        streamingAvailability &&
        streamingAvailability.country &&
        streamingAvailability.country.US
      ) {
        this.streamingData = streamingAvailability.country.US;
      }
      this.showStreamingDetails = true;
    });
  }

  onImageError(event: any) {
    event.target.src = 'assets/images/placeholder.png';
  }
}
