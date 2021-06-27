import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingFirstViewComponent } from './landing-first-view.component';

describe('LandingFirstViewComponent', () => {
  let component: LandingFirstViewComponent;
  let fixture: ComponentFixture<LandingFirstViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingFirstViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingFirstViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
