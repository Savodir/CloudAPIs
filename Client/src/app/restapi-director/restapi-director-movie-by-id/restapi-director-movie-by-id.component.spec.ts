import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestapiDirectorMovieByIdComponent } from './restapi-director-movie-by-id.component';

describe('RestapiDirectorMovieByIdComponent', () => {
  let component: RestapiDirectorMovieByIdComponent;
  let fixture: ComponentFixture<RestapiDirectorMovieByIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestapiDirectorMovieByIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestapiDirectorMovieByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
