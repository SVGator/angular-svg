import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgCssComponent } from './svg-css.component';

describe('SvgCssComponent', () => {
  let component: SvgCssComponent;
  let fixture: ComponentFixture<SvgCssComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SvgCssComponent]
    });
    fixture = TestBed.createComponent(SvgCssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
