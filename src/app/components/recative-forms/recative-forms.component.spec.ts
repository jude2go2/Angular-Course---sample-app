import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecativeFormsComponent } from './recative-forms.component';

describe('RecativeFormsComponent', () => {
  let component: RecativeFormsComponent;
  let fixture: ComponentFixture<RecativeFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecativeFormsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecativeFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
