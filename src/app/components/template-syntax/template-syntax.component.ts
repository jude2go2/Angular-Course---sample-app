import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-syntax',
  templateUrl: './template-syntax.component.html',
  styleUrls: ['./template-syntax.component.scss'],
})
export class TemplateSyntaxComponent implements OnInit {
  public movieName: string = 'Iron Man';

  public movieObj: { [key: string]: any } = {
    name: 'Guardians 1',
    cast: [],
  };

  public isDisabled: boolean = false;

  constructor() {
    setTimeout(() => {
      this.movieName = 'Captain America';
      this.movieObj.cast = ['actor 1', 'actor 2', 'actress 3', 'Groot'];
      this.movieObj.director = {};
      this.movieObj.director.firstName = 'Joss Weadon';
    }, 3000);
  }

  public onButtonClick(event) {
    this.movieName = 'Winter Soldier';
    this.isDisabled = true;
  }

  public onDbClick() {
    this.movieName = 'Black Widow';
  }
  ngOnInit(): void {}
}
