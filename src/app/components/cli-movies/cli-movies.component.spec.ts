import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CliMoviesComponent } from './cli-movies.component';

describe('CliMovieComponent', () => {
  let component: CliMoviesComponent;
  let fixture: ComponentFixture<CliMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CliMoviesComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CliMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
