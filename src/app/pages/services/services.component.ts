import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../../services/language.service';

declare var AOS: any;

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  isEnglish: boolean = false;

  constructor(private languageService: LanguageService) {}

  ngOnInit() {
    // Subscribe to language changes
    this.languageService.isEnglish$.subscribe((isEnglish: boolean) => {
      this.isEnglish = isEnglish;
    });
    
    if (typeof AOS !== 'undefined') {
      AOS.refresh();
    }
  }
}