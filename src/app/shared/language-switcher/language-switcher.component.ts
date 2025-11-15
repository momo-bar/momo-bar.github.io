import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LanguageService } from '../../services/language.service';

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
export class LanguageSwitcherComponent implements OnInit {
  currentLanguage: string = 'fr'; // French is now the default
  isDropdownOpen: boolean = false;
  
  languages: Language[] = [
    { code: 'en', name: 'EN', flag: '🇺🇸' },
    { code: 'fr', name: 'FR', flag: '🇨🇦' }
  ];

  ngOnInit() {
    // Subscribe to language changes
    this.languageService.isEnglish$.subscribe((isEnglish: boolean) => {
      this.currentLanguage = isEnglish ? 'en' : 'fr';
    });
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  toggleLanguage() {
    this.languageService.toggleLanguage();
    this.isDropdownOpen = false;
  }

  switchLanguage(langCode: string) {
    this.isDropdownOpen = false; // Close dropdown after selection
    this.languageService.setLanguage(langCode === 'en');
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

  constructor(
    private router: Router,
    private languageService: LanguageService
  ) {}
}
