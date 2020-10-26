import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MovieService } from 'src/app/services/movie.service';
import { IMovie } from '../movie/movie.component';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss'],
})
export class DirectivesComponent implements OnInit, OnDestroy {
  public displayMovies: boolean = true;
  private subscription: Subscription = new Subscription();

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
    this.subscription.add(
      this._movieService.getMovies().subscribe((data) => {
        this.listOfMovies = data;
        console.count('still getting movies');
      })
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  public getMoreMovies() {
    this._movieService.getMovies().subscribe((data) => {
      this.listOfMovies = [...this.listOfMovies, ...data];
    });
  }

  public onRemoveMovie(id: number): void {
    // this.listOfMovies = this.listOfMovies.filter((movie) => movie.id !== id);

    const movieIndex = this.listOfMovies.findIndex((movie) => movie.id === id);
    this.listOfMovies.splice(movieIndex, 1);
  }
}
