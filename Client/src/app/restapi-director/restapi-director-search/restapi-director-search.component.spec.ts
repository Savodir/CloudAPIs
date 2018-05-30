import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestapiDirectorSearchComponent } from './restapi-director-search.component';

describe('RestapiDirectorSearchComponent', () => {
  let component: RestapiDirectorSearchComponent;
  let fixture: ComponentFixture<RestapiDirectorSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestapiDirectorSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestapiDirectorSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
