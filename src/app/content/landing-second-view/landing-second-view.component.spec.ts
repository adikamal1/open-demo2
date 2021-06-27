import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingSecondViewComponent } from './landing-second-view.component';

describe('LandingSecondViewComponent', () => {
  let component: LandingSecondViewComponent;
  let fixture: ComponentFixture<LandingSecondViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingSecondViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingSecondViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
