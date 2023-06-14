import { OnInit, Component } from '@angular/core';
import initAnimation from './ferris-wheel-animation.js';

@Component({
  selector: 'app-ferris-wheel',
  templateUrl: './ferris-wheel.component.html',
  styleUrls: ['./ferris-wheel.component.css']
})
export class FerrisWheelComponent {
    ngOnInit(): void {
        initAnimation();
    }
}
