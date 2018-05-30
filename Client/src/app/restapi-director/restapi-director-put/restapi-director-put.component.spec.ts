import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestapiDirectorPutComponent } from './restapi-director-put.component';

describe('RestapiDirectorPutComponent', () => {
  let component: RestapiDirectorPutComponent;
  let fixture: ComponentFixture<RestapiDirectorPutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestapiDirectorPutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestapiDirectorPutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
