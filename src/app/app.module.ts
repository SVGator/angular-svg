import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FerrisWheelComponent } from './ferris-wheel/ferris-wheel.component';
import { SvgatorLogoComponent } from './svgator-logo/svgator-logo.component';

import { SvgCssComponent } from './svg-css/svg-css.component';

@NgModule({
  declarations: [
    AppComponent,
    FerrisWheelComponent,
    SvgatorLogoComponent,
    SvgCssComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
