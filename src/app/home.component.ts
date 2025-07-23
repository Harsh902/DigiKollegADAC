import { Component } from '@angular/core';
import { CountdownComponent } from './countdown.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CountdownComponent, TranslateModule],
  template: `
    <section class="hero">
      <div class="countdown-timer">
        <app-countdown></app-countdown>
      </div>
      <div class="signup-box">
        <div class="signup-inner-box">
          <h3>Sign up to get notified when the movie is out!</h3>
          <div class="mailchimp-form">
            <form action="#" method="post" target="_blank" novalidate>
              <input type="email" name="EMAIL" placeholder="Your email address" required>
              <button type="submit">Notify Me</button>
            </form>
          </div>
        </div>
      </div>
      <div class="release-date">
        <h2>Premieres July 25, 2025</h2>
      </div>
    </section>
  `,
  styleUrls: ['./app.component.scss']
})
export class HomeComponent {
  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.use('en'); // Switch dynamically
  }
}
