import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImdbpaginationComponent } from './imdbpagination.component';

describe('ImdbpaginationComponent', () => {
  let component: ImdbpaginationComponent;
  let fixture: ComponentFixture<ImdbpaginationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImdbpaginationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImdbpaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
