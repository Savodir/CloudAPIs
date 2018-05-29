import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestapidelComponent } from './restapidel.component';

describe('RestapidelComponent', () => {
  let component: RestapidelComponent;
  let fixture: ComponentFixture<RestapidelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestapidelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestapidelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
