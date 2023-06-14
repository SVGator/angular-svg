import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FerrisWheelComponent } from './ferris-wheel.component';

describe('FerrisWheelComponent', () => {
  let component: FerrisWheelComponent;
  let fixture: ComponentFixture<FerrisWheelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FerrisWheelComponent]
    });
    fixture = TestBed.createComponent(FerrisWheelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
