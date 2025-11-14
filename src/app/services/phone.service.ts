import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PhoneService {
  // Centralized phone number configuration
  private readonly phoneNumber = '+1-514-555-0123'; // Montreal area code
  private readonly displayNumber = '(514) 555-0123';

  constructor() { }

  /**
   * Get the phone number in tel: format for links
   */
  getTelLink(): string {
    return `tel:${this.phoneNumber}`;
  }

  /**
   * Get the formatted phone number for display
   */
  getDisplayNumber(): string {
    return this.displayNumber;
  }

  /**
   * Get the raw phone number
   */
  getRawNumber(): string {
    return this.phoneNumber;
  }

  /**
   * Check if the user is on a mobile device
   */
  isMobileDevice(): boolean {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  }

  /**
   * Check if the device supports tel: links
   */
  supportsTelLinks(): boolean {
    return this.isMobileDevice() || /Mobi|Android/i.test(navigator.userAgent);
  }
}