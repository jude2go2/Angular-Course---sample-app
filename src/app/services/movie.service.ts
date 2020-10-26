import { Injectable } from '@angular/core';
import { IMovie } from '../components/movie/movie.component';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor() {}
  private movies: IMovie[] = [
    {
      id: 1,
      name: 'ironman',
      mainChar: 'Tory Stark',
      rating: 8.5,
      isInTheater: false,
    },
    {
      id: 2,
      name: 'The Hulk',
      mainChar: 'Bruce Banner',
      rating: 6.8,
      isInTheater: true,
    },
    {
      id: 3,
      name: 'Doctor Starnge',
      mainChar: 'Steven Strange',
      rating: 9.3,
      isInTheater: false,
    },
    {
      id: 4,
      name: 'Spiderman',
      mainChar: 'Peter Parker',
      rating: 8.1,
      isInTheater: true,
    },
  ];
  public random = (Math.random() * 1000).toFixed(0);

  public getRandom(): number {
    return parseInt(this.random);
  }

  public getMovies(): Array<IMovie> {
    return this.movies;
  }

  public removeMovie(id: number): void {
    const index = this.movies.findIndex((movie) => movie.id === id);
    this.movies.splice(index, 1);
  }
}
