import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImdbposterComponent } from './imdbposter.component';

describe('ImdbposterComponent', () => {
  let component: ImdbposterComponent;
  let fixture: ComponentFixture<ImdbposterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImdbposterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImdbposterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
