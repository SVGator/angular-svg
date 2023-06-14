import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgatorLogoComponent } from './svgator-logo.component';

describe('SvgatorLogoComponent', () => {
  let component: SvgatorLogoComponent;
  let fixture: ComponentFixture<SvgatorLogoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SvgatorLogoComponent]
    });
    fixture = TestBed.createComponent(SvgatorLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
