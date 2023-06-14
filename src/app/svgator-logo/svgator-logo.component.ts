import { OnInit, Component } from '@angular/core';
import initAnimation from './svgator-logo-animation.js';


@Component({
  selector: 'app-svgator-logo',
  templateUrl: './svgator-logo.component.html',
  styleUrls: ['./svgator-logo.component.css']
})
export class SvgatorLogoComponent {
    ngOnInit(): void {
        initAnimation();
    }
}
