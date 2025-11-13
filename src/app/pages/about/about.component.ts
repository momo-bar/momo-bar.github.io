import { Component, OnInit } from '@angular/core';

declare var AOS: any;

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  ngOnInit() {
    if (typeof AOS !== 'undefined') {
      AOS.refresh();
    }
  }
}