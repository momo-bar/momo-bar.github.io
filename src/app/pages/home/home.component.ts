import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../../services/language.service';

declare var AOS: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isEnglish = false;

  constructor(private languageService: LanguageService) { }

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