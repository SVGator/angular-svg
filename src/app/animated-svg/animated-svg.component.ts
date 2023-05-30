import { OnInit, Component } from '@angular/core';
import initAnimation from './animated-svg.js';

@Component({
  selector: 'app-animated-svg',
  templateUrl: './animated-svg.component.html',
  styleUrls: ['./animated-svg.component.css']
})
export class AnimatedSvgComponent {
    title = 'CodeSandbox';
    ngOnInit(): void {
        initAnimation();
    }
}
