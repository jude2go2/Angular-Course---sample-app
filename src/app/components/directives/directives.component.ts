import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { IMovie } from '../movie/movie.component';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss'],
})
export class DirectivesComponent implements OnInit {
  constructor(private _movieService: MovieService) {}

  public list: Array<string> = [
    'Iron Man',
    'The Hulk',
    'Doctor Strange',
    'Spiderman',
  ];

  public listOfMovies: Array<IMovie> = [];

  ngOnInit(): void {
    this._movieService.fetchMovies();
    this._movieService.getMovies().subscribe((data) => {
      console.log(data);
      this.listOfMovies = data;
    });
    console.log(
      'Radom from Directive Component',
      this._movieService.getRandom()
    );
  }

  public getMoreMovies() {
    this._movieService.getMovies().subscribe((data) => {
      console.log(data);
      this.listOfMovies = [...this.listOfMovies, ...data];
    });
    console.log(
      'Radom from Directive Component',
      this._movieService.getRandom()
    );
  }

  public onRemoveMovie(id: number): void {
    // this.listOfMovies = this.listOfMovies.filter((movie) => movie.id !== id);

    const movieIndex = this.listOfMovies.findIndex((movie) => movie.id === id);
    this.listOfMovies.splice(movieIndex, 1);
  }
}
