import { Component, OnInit } from '@angular/core';

declare var AOS: any;

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  ngOnInit() {
    if (typeof AOS !== 'undefined') {
      AOS.refresh();
    }
  }
}