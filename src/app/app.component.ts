import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ServiceWorker],
})
export class AppComponent {
  title = 'myApp';

  public list: Array<string> = ['eggs', 'Mangos', 'Pineapples'];
}
