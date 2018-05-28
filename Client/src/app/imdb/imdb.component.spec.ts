import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IMDBComponent } from './imdb.component';

describe('ImdbComponent', () => {
  let component: IMDBComponent;
  let fixture: ComponentFixture<IMDBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IMDBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IMDBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
