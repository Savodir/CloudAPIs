import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestApititleSearchComponent } from './rest-apititle-search.component';

describe('RestApititleSearchComponent', () => {
  let component: RestApititleSearchComponent;
  let fixture: ComponentFixture<RestApititleSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestApititleSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestApititleSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
