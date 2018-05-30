import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestapiDirectorPostComponent } from './restapi-director-post.component';

describe('RestapiDirectorPostComponent', () => {
  let component: RestapiDirectorPostComponent;
  let fixture: ComponentFixture<RestapiDirectorPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestapiDirectorPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestapiDirectorPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
