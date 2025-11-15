import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { LanguageService } from '../../services/language.service';

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

  ngOnInit() {
    // Subscribe to language changes
    this.languageService.isEnglish$.subscribe(isEnglish => {
      this.isEnglish = isEnglish;
    });
  }

  toggleLanguage() {
    this.languageService.toggleLanguage();
  }

  constructor(
    private router: Router,
    private languageService: LanguageService
  ) { }
}