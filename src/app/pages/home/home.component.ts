import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <div class="page-container">
      <h1>Home</h1>
      <p>Welcome to the Home page</p>
    </div>
  `,
  styles: [`
    .page-container {
      padding: 2rem;
      text-align: center;
    }
    h1 {
      color: #333;
      margin-bottom: 1rem;
    }
  `]
})
export class HomeComponent { }