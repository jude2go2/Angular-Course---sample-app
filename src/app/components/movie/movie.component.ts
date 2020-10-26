import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';

export interface IMovie {
  id: number;
  name: string;
  mainChar: string;
  rating: number;
  isInTheater?: boolean;
}

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent implements OnInit {
  constructor(private _movieService: MovieService) {}
  @Input() movie: IMovie;

  @Output() removeMovie: EventEmitter<number> = new EventEmitter();

  ngOnInit(): void {
    //Used when starting up the component
  }

  public onRemoveMovie(id: number): void {
    // this.removeMovie.emit(id);
    this._movieService.removeMovie(id);
  }
}
