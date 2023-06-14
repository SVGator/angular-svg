import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimatedSvgComponent } from './animated-svg.component';

describe('AnimatedSvgComponent', () => {
  let component: AnimatedSvgComponent;
  let fixture: ComponentFixture<AnimatedSvgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnimatedSvgComponent]
    });
    fixture = TestBed.createComponent(AnimatedSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
