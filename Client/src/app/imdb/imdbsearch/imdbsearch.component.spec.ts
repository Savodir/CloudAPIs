import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImdbsearchComponent } from './imdbsearch.component';

describe('ImdbsearchComponent', () => {
  let component: ImdbsearchComponent;
  let fixture: ComponentFixture<ImdbsearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImdbsearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImdbsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
