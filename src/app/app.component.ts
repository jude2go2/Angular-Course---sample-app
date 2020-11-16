import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'sampleApp';
  shouldDisplayMovie: boolean = true;

  toggleMovieComponent() {
    this.shouldDisplayMovie = !this.shouldDisplayMovie;
  }
}
