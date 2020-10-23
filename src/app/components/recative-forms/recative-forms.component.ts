import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IMovie } from '../movie/movie.component';

@Component({
  selector: 'app-recative-forms',
  templateUrl: './recative-forms.component.html',
  styleUrls: ['./recative-forms.component.scss'],
})
export class RecativeFormsComponent implements OnInit {
  public movies: Array<IMovie> = [];

  public form: FormGroup = new FormGroup({
    movieName: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
    ]),
    mainChar: new FormControl('', Validators.required),
    rating: new FormControl('', Validators.required),
  });

  constructor() {}

  ngOnInit(): void {}

  public onSubmit(): void {
    this.form.markAllAsTouched();
    console.log(this.form);
    if (this.form.valid) {
      const movie: IMovie = {
        id: Math.floor(Math.random() * 100),
        name: this.form.value.movieName,
        mainChar: this.form.value.maieChar,
        rating: this.form.value.rating,
      };
      this.movies.push(movie);
    }
  }

  public onRemoveMovie(i: number) {
    this.movies = this.movies.filter((movie, index) => index !== i);
  }
}
