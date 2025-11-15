import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
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
  }
}