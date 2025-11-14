import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare var AOS: any;

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  isEnglish: boolean = false;

  constructor(private router: Router) {}

  ngOnInit() {
    // Check if current route is English
    this.isEnglish = this.router.url.startsWith('/en');
    
    if (typeof AOS !== 'undefined') {
      AOS.refresh();
    }
  }
}