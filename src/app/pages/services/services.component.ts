import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  template: `
    <div class="page-container">
      <h1>Services</h1>
      <p>This is the Services page</p>
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
export class ServicesComponent { }