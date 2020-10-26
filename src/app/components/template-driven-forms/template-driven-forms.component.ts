import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IMovie } from '../movie/movie.component';

@Component({
  selector: 'app-template-driven-forms',
  templateUrl: './template-driven-forms.component.html',
  styleUrls: ['./template-driven-forms.component.scss'],
})
export class TemplateDrivenFormsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  public movies: IMovie[] = [];

  public onSubmit(form: NgForm): void {
    if (form.valid) {
      const movie: IMovie = {
        id: Math.floor(Math.random() * 100),
        name: form.value.movieName,
        mainChar: form.value.maieChar,
        rating: form.value.rating,
      };
      this.movies.push(movie);
    }
  }

  public onRemoveMovie(i: number) {
    this.movies.splice(i, 1);
  }
}
