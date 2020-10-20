import { SimpleChanges } from '@angular/core';
import { AfterViewInit, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent implements OnInit, AfterViewInit {
  constructor() {}
  @Input() text: string;

  ngOnInit(): void {
    //Used when starting up the component
    console.log('On Init');
  }

  ngAfterViewInit(): void {
    // used after the component is initialized and we need something from it
    console.log('After View Init');
  }

  ngOnDestroy() {
    //Used when the component is removed from the DOM usually for unsubscribing
    console.log('On Destroy');
  }

  gOnChanges(changes: SimpleChanges) {
    //Used to do specific actions on Input Changes
    // WILL NOT WORK
    console.log('On Changes', changes);
  }
}
