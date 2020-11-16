import { Component, Input } from '@angular/core';
import { MovieType } from 'src/app/models/movie-type.enum';
import { Movie } from '../../models/movie.interface';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent {
  constructor() {}

  get movieTypeEnum() {
    return MovieType;
  }

  @Input() movie: Movie;
}
