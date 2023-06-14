import { OnInit, Component, ViewEncapsulation } from '@angular/core';
import initAnimation from './ferris-wheel-animation.js';

@Component({
  selector: 'app-ferris-wheel',
  templateUrl: './ferris-wheel.component.html',
  styleUrls: ['./ferris-wheel.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class FerrisWheelComponent {
    ngOnInit(): void {
        initAnimation();
    }
}
