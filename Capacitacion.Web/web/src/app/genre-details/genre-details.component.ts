import { Component, OnInit, Input } from '@angular/core';
import { Genre } from '../models/genre';

@Component({
    selector: '[genre-details]',
    templateUrl: 'genre-details.component.html'
})
export class GenreDetailsComponent {
  @Input() genre: Genre;
}
