import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isMenuOpen = false;
  isEnglish = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    
    // Prevent body scroll when menu is open on mobile
    if (this.isMenuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
  }

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

  constructor(private router: Router) { }
}