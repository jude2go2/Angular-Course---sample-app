import {
  AfterViewInit,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  OnDestroy,
  DoCheck,
} from '@angular/core';
import { MovieType } from 'src/app/models/movie-type.enum';
import { Movie } from '../../models/movie.interface';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent
  implements OnInit, OnChanges, AfterViewInit, OnDestroy, DoCheck {
  title = 'Movies Component Works!!';

  public listOfMovies: Movie[] = [
    {
      name: 'Captain America',
      mainChar: 'Steve Rogers',
      rating: 7.5,
      releaseDate: new Date(),
      type: MovieType.Action,
    },
    {
      name: 'Spiderman',
      mainChar: 'Peter Parker',
      rating: 8.5,
      releaseDate: new Date(2018, 11, 20),
      type: MovieType.Drama,
    },
    {
      name: 'Guardians of the Galaxy',
      mainChar: 'Peter',
      rating: 6.5,
      releaseDate: new Date(2014, 8, 20),
      type: MovieType.Action,
    },
  ];

  ngOnInit() {
    console.log('Movies On Init');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  ngAfterViewInit() {
    console.log('After View Init');
  }

  ngDoCheck(): void {
    console.log('object');
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    console.log('On Destory');
  }
}
