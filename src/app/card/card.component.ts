import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input() movie: any;
  onImageError(event: any) {
    event.target.src = 'assets/images/placeholder.png';
  }
}
