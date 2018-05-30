import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestapiDirectorComponent } from './restapi-director.component';

describe('RestapiDirectorComponent', () => {
  let component: RestapiDirectorComponent;
  let fixture: ComponentFixture<RestapiDirectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestapiDirectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestapiDirectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
