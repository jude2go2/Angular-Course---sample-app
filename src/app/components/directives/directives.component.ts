import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss'],
})
export class DirectivesComponent implements OnInit {
  constructor() {}

  public list: Array<string> = [
    'Iron Man',
    'The Hulk',
    'Doctor Strange',
    'Spiderman',
  ];

  public listOfMovies: Array<any> = [
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

  ngOnInit(): void {}

  public onRemoveMovie(id: number): void {
    // this.listOfMovies = this.listOfMovies.filter((movie) => movie.id !== id);

    const movieIndex = this.listOfMovies.findIndex((movie) => movie.id === id);
    this.listOfMovies.splice(movieIndex, 1);
  }
}
