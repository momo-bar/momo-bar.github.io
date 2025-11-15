import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private isEnglishSubject = new BehaviorSubject<boolean>(false);
  public isEnglish$ = this.isEnglishSubject.asObservable();

  constructor(private router: Router) {
    this.initializeLanguage();
  }

  private initializeLanguage(): void {
    // Check localStorage first for saved preference
    const savedLanguage = localStorage.getItem('language');
    
    if (savedLanguage) {
      // Use saved preference
      this.setLanguage(savedLanguage === 'en');
    } else {
      // Fallback to URL detection for first visit
      const currentPath = window.location.pathname;
      this.setLanguage(currentPath.startsWith('/en'));
    }
  }

  setLanguage(isEnglish: boolean): void {
    this.isEnglishSubject.next(isEnglish);
    
    // Save preference to localStorage
    localStorage.setItem('language', isEnglish ? 'en' : 'fr');
    
    // Update URL if needed
    const currentPath = window.location.pathname;
    const isCurrentlyEnglish = currentPath.startsWith('/en');
    
    if (isEnglish && !isCurrentlyEnglish) {
      // Switch to English route
      let newPath = '';
      if (currentPath === '/' || currentPath === '') {
        newPath = '/en';
      } else if (currentPath === '/a-propos') {
        newPath = '/en/about';
      } else if (currentPath === '/services') {
        newPath = '/en/services';
      } else if (currentPath === '/contact') {
        newPath = '/en/contact';
      } else {
        newPath = '/en';
      }
      this.router.navigateByUrl(newPath);
    } else if (!isEnglish && isCurrentlyEnglish) {
      // Switch to French route
      let newPath = '';
      if (currentPath === '/en' || currentPath === '/en/') {
        newPath = '/';
      } else if (currentPath === '/en/about') {
        newPath = '/a-propos';
      } else if (currentPath === '/en/services') {
        newPath = '/services';
      } else if (currentPath === '/en/contact') {
        newPath = '/contact';
      } else {
        newPath = '/';
      }
      this.router.navigateByUrl(newPath);
    }
  }

  toggleLanguage(): void {
    const current = this.isEnglishSubject.value;
    this.setLanguage(!current);
  }

  getCurrentLanguage(): boolean {
    return this.isEnglishSubject.value;
  }
}