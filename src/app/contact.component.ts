import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  template: `
    <div class="page-content">
      <h2>Contact</h2>
    <p>For inquiries, please email us at info&#64;movie-name.com or use the contact form (coming soon).</p>
    </div>
  `,
  styles: [`
    .page-content { padding: 2rem; max-width: 600px; margin: 0 auto; }
    h2 { color: #00205b; }
    p { color: #222; }
    a { color: #00205b; }
  `]
})
export class ContactComponent {}
