import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, timer } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { IMovie } from '../components/movie/movie.component';

import { mock_data } from './MOCK_DATA';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor() {}
  private page: number = 1;

  private movieSubject$: BehaviorSubject<Array<IMovie>> = new BehaviorSubject(
    []
  );

  public random = (Math.random() * 1000).toFixed(0);

  public getRandom(): number {
    return parseInt(this.random);
  }

  public fetchMovies() {
    setTimeout(() => {
      this.movieSubject$.next(mock_data);
    }, 3000);
  }

  public getAllMovies(): Observable<Array<IMovie>> {
    return this.movieSubject$.asObservable();
  }

  public getMovies(): Observable<Array<IMovie>> {
    //pager logic
    let page: number = this.page * 10;
    let start = this.page === 1 ? 0 : page - 10;
    let end = page;
    this.page++;
    return this.movieSubject$.pipe(
      map((movies) => {
        return movies.slice(start, end);
      })
    );
  }

  public removeMovie(id: number): void {
    const index = this.movieSubject$.value.findIndex(
      (movie) => movie.id === id
    );
    // this.movies.splice(index, 1);
    // send AJAX request to server to delete movie

    setTimeout(() => {
      mock_data.splice(index, 1);
      this.movieSubject$.next(mock_data);
    }, 3000);
  }
}
