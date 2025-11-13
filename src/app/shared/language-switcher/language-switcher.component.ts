import { Component } from '@angular/core';
import { Router } from '@angular/router';

export interface Language {
  code: string;
  name: string;
  flag: string;
}

@Component({
  selector: 'app-language-switcher',
  templateUrl: './language-switcher.component.html',
  styleUrls: ['./language-switcher.component.scss']
})
export class LanguageSwitcherComponent {
  currentLanguage: string = 'fr'; // French is now the default
  
  languages: Language[] = [
    { code: 'en', name: 'EN', flag: '🇺🇸' },
    { code: 'fr', name: 'FR', flag: '🇨🇦' }
  ];

  switchLanguage(langCode: string) {
    if (langCode !== this.currentLanguage) {
      this.currentLanguage = langCode;
      localStorage.setItem('selectedLanguage', langCode);
      
      // Navigate to the appropriate language version
      const currentRoute = window.location.pathname;
      let newRoute = '';
      
      if (langCode === 'en') {
        // Switch to English routes
        if (currentRoute === '/' || currentRoute === '') {
          newRoute = '/en';
        } else if (currentRoute === '/a-propos') {
          newRoute = '/en/about';
        } else if (currentRoute === '/services') {
          newRoute = '/en/services';
        } else if (currentRoute === '/contact') {
          newRoute = '/en/contact';
        } else {
          newRoute = '/en';
        }
      } else {
        // Switch to French routes (default)
        if (currentRoute.startsWith('/en')) {
          if (currentRoute === '/en' || currentRoute === '/en/') {
            newRoute = '/';
          } else if (currentRoute === '/en/about') {
            newRoute = '/a-propos';
          } else if (currentRoute === '/en/services') {
            newRoute = '/services';
          } else if (currentRoute === '/en/contact') {
            newRoute = '/contact';
          } else {
            newRoute = '/';
          }
        } else {
          newRoute = currentRoute; // Already on French route
        }
      }
      
      if (newRoute) {
        window.location.href = newRoute;
      }
    }
  }

  getCurrentLanguage(): Language {
    return this.languages.find(lang => lang.code === this.currentLanguage) || this.languages[0];
  }

  isLanguageActive(langCode: string): boolean {
    return this.currentLanguage === langCode;
  }

  isFrenchActive(): boolean {
    return this.currentLanguage === 'fr';
  }

  constructor(private router: Router) {
    // Detect current language from URL
    const currentPath = window.location.pathname;
    if (currentPath.startsWith('/en')) {
      this.currentLanguage = 'en';
    } else {
      this.currentLanguage = 'fr';
    }
    
    // Load saved language or use detected language
    const savedLang = localStorage.getItem('selectedLanguage');
    if (savedLang && this.languages.find(lang => lang.code === savedLang)) {
      this.currentLanguage = savedLang;
    } else {
      localStorage.setItem('selectedLanguage', this.currentLanguage);
    }
  }
}
