import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestApiputComponent } from './rest-apiput.component';

describe('RestApiputComponent', () => {
  let component: RestApiputComponent;
  let fixture: ComponentFixture<RestApiputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestApiputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestApiputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
