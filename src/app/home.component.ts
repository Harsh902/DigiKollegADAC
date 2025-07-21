import { Component } from '@angular/core';
import { CountdownComponent } from './countdown.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CountdownComponent],
  template: `
    <section class="hero">
      <h1 class="movie-title">movie-name</h1>
      <h2 class="release-date">Premieres July 25, 2025</h2>
      <div class="countdown-timer">
        <app-countdown></app-countdown>
      </div>
      <div class="signup-box">
        <h3>Sign up to get notified when the movie is out!</h3>
        <div class="mailchimp-form">
          <form action="#" method="post" target="_blank" novalidate>
            <input type="email" name="EMAIL" placeholder="Your email address" required>
            <button type="submit">Notify Me</button>
          </form>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./app.component.scss']
})
export class HomeComponent {}
