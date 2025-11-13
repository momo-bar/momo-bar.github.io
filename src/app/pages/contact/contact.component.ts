import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  template: `
    <div class="page-container">
      <h1>Contact</h1>
      <p>This is the Contact page</p>
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
export class ContactComponent { }