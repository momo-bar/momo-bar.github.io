import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <header class="header">
      <nav class="nav">
        <div class="logo">
          <h2>Hormonia Decor</h2>
        </div>
        <ul class="nav-links">
          <li><a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Home</a></li>
          <li><a routerLink="/about" routerLinkActive="active">About</a></li>
          <li><a routerLink="/services" routerLinkActive="active">Services</a></li>
          <li><a routerLink="/contact" routerLinkActive="active">Contact</a></li>
        </ul>
      </nav>
    </header>
  `,
  styles: [`
    .header {
      background-color: #fff;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      position: sticky;
      top: 0;
      z-index: 1000;
    }
    
    .nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem 2rem;
      max-width: 1200px;
      margin: 0 auto;
    }
    
    .logo h2 {
      color: #333;
      margin: 0;
    }
    
    .nav-links {
      display: flex;
      list-style: none;
      margin: 0;
      padding: 0;
      gap: 2rem;
    }
    
    .nav-links a {
      text-decoration: none;
      color: #666;
      font-weight: 500;
      transition: color 0.3s ease;
    }
    
    .nav-links a:hover,
    .nav-links a.active {
      color: #007bff;
    }
    
    @media (max-width: 768px) {
      .nav {
        flex-direction: column;
        gap: 1rem;
      }
      
      .nav-links {
        gap: 1rem;
      }
    }
  `]
})
export class HeaderComponent { }