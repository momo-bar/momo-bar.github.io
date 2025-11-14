import { Component, Input, OnInit } from '@angular/core';
import { PhoneService } from '../../services/phone.service';

@Component({
  selector: 'app-smart-call-button',
  templateUrl: './smart-call-button.component.html',
  styleUrls: ['./smart-call-button.component.scss']
})
export class SmartCallButtonComponent implements OnInit {
  @Input() buttonClass: string = 'btn-secondary';
  @Input() showIcon: boolean = true;
  @Input() textEn: string = 'Call Now';
  @Input() textFr: string = 'Appelez';
  @Input() isEnglish: boolean = false;

  isMobile: boolean = false;
  phoneNumber: string = '';
  telLink: string = '';

  constructor(private phoneService: PhoneService) { }

  ngOnInit(): void {
    this.isMobile = this.phoneService.isMobileDevice();
    this.phoneNumber = this.phoneService.getDisplayNumber();
    this.telLink = this.phoneService.getTelLink();
  }

  getButtonText(): string {
    if (this.isMobile) {
      // On mobile, show action text
      return this.isEnglish ? this.textEn : this.textFr;
    } else {
      // On desktop, show the phone number
      return this.phoneNumber;
    }
  }

  getButtonLink(): string {
    return this.isMobile ? this.telLink : 'javascript:void(0)';
  }

  onDesktopClick(event: Event): void {
    if (!this.isMobile) {
      event.preventDefault();
      
      // On desktop, copy number to clipboard and show visual feedback
      navigator.clipboard.writeText(this.phoneNumber).then(() => {
        this.showCopyFeedback(event.target as HTMLElement);
      }).catch(() => {
        // Fallback: show phone number in alert
        alert(`Phone number: ${this.phoneNumber}`);
      });
    }
  }

  private showCopyFeedback(element: HTMLElement): void {
    const button = element.closest('.smart-call-btn') as HTMLElement;
    if (button) {
      button.classList.add('copied');
      
      // Create temporary tooltip
      const tooltip = document.createElement('div');
      tooltip.textContent = 'Phone number copied!';
      tooltip.style.cssText = `
        position: absolute;
        background: var(--accent-color);
        color: white;
        padding: 4px 8px;
        border-radius: 4px;
        font-size: 12px;
        top: -35px;
        left: 50%;
        transform: translateX(-50%);
        white-space: nowrap;
        z-index: 1000;
        opacity: 0;
        transition: opacity 0.3s ease;
      `;
      
      button.style.position = 'relative';
      button.appendChild(tooltip);
      
      // Show tooltip
      setTimeout(() => tooltip.style.opacity = '1', 10);
      
      // Remove feedback after animation
      setTimeout(() => {
        button.classList.remove('copied');
        if (tooltip.parentNode) {
          tooltip.parentNode.removeChild(tooltip);
        }
      }, 2000);
    }
  }
}