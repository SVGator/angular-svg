import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FerrisWheelComponent } from './ferris-wheel/ferris-wheel.component';
import { SvgatorLogoComponent } from './svgator-logo/svgator-logo.component';

@NgModule({
  declarations: [
    AppComponent,
    FerrisWheelComponent,
    SvgatorLogoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
