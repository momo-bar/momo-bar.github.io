import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

declare var AOS: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isEnglish = false;

  constructor(private router: Router) { }

  private detectLanguage() {
    const currentPath = window.location.pathname;
    this.isEnglish = currentPath.startsWith('/en');
  }

  ngOnInit() {
    this.detectLanguage();
    
    // Listen for route changes to update language detection
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.detectLanguage();
    });

    if (typeof AOS !== 'undefined') {
      AOS.refresh();
    }
  }
}