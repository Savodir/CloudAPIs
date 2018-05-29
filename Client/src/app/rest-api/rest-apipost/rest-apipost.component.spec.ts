import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestApipostComponent } from './rest-apipost.component';

describe('RestApipostComponent', () => {
  let component: RestApipostComponent;
  let fixture: ComponentFixture<RestApipostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestApipostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestApipostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
