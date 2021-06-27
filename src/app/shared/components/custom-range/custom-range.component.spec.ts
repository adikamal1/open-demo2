import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomRangeComponent } from './custom-range.component';

describe('CustomRangeComponent', () => {
  let component: CustomRangeComponent;
  let fixture: ComponentFixture<CustomRangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomRangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
