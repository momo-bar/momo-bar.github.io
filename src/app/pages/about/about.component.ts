import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
    <div class="page-container">
      <h1>About</h1>
      <p>This is the About page</p>
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
export class AboutComponent { }