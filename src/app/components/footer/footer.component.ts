import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="footer">
      <div class="footer-content">
        <p>&copy; 2025 Hormonia Decor. All rights reserved.</p>
        <div class="footer-links">
          <a routerLink="/">Home</a>
          <a routerLink="/about">About</a>
          <a routerLink="/services">Services</a>
          <a routerLink="/contact">Contact</a>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      background-color: #333;
      color: white;
      margin-top: auto;
    }
    
    .footer-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 2rem;
      max-width: 1200px;
      margin: 0 auto;
    }
    
    .footer-content p {
      margin: 0;
    }
    
    .footer-links {
      display: flex;
      gap: 1rem;
    }
    
    .footer-links a {
      color: #ccc;
      text-decoration: none;
      transition: color 0.3s ease;
    }
    
    .footer-links a:hover {
      color: white;
    }
    
    @media (max-width: 768px) {
      .footer-content {
        flex-direction: column;
        gap: 1rem;
        text-align: center;
      }
    }
  `]
})
export class FooterComponent { }