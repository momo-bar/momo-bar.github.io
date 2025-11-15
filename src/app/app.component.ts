import { AfterViewInit, Component } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  ngAfterViewInit() {
    AOS.init({
      once: true, // Elements animate only once and stay visible
      duration: 800, // Animation duration
      easing: 'ease-out-cubic', // Smooth easing
      offset: 100 // Trigger animations 100px before element is in viewport
    });
  }
  title = 'hormoniaDecor';
}
