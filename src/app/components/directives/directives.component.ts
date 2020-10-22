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
      name: 'ironman',
      mainChar: 'Tory Stark',
      rating: 8.5,
      isInTheater: false,
    },
    {
      name: 'The Hulk',
      mainChar: 'Bruce Banner',
      rating: 6.8,
      isInTheater: true,
    },
    {
      name: 'Doctor Starnge',
      mainChar: 'Steven Strange',
      rating: 9.3,
      isInTheater: false,
    },
    {
      name: 'Spiderman',
      mainChar: 'Peter Parker',
      rating: 8.1,
      isInTheater: true,
    },
  ];

  ngOnInit(): void {}
}
