import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <div class="page-content">
      <h2>About Us</h2>
      <p>This is a demo movie website. Here you can find information about the movie, its release date, and sign up to be notified when it is out. More details about the team and project will be added soon.</p>
    </div>
  `,
  styles: [`
    .page-content { padding: 2rem; max-width: 600px; margin: 0 auto; }
    h2 { color: #00205b; }
    p { color: #222; }
  `]
})
export class AboutComponent {}
