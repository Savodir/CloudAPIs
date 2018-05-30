import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestapiDirectorDelComponent } from './restapi-director-del.component';

describe('RestapiDirectorDelComponent', () => {
  let component: RestapiDirectorDelComponent;
  let fixture: ComponentFixture<RestapiDirectorDelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestapiDirectorDelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestapiDirectorDelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
