import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImdbsearchbyidComponent } from './imdbsearchbyid.component';

describe('ImdbsearchbyidComponent', () => {
  let component: ImdbsearchbyidComponent;
  let fixture: ComponentFixture<ImdbsearchbyidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImdbsearchbyidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImdbsearchbyidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
