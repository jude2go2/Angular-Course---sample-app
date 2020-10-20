import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cli-movies',
  templateUrl: './cli-movies.component.html',
  styleUrls: ['./cli-movies.component.scss'],
})
export class CliMoviesComponent implements OnInit {
  constructor() {}

  public isMovieVisible: boolean = false;

  public movieName: string = 'Superman';

  ngOnInit(): void {}

  public handleToggleClick() {
    this.isMovieVisible = !this.isMovieVisible;
  }

  public handleChangeTextClick() {
    this.movieName = 'Spiderman';
  }
}
