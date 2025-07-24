import { Component } from '@angular/core';
import { CountdownComponent } from './countdown.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CountdownComponent, TranslateModule],
  template: `
    <section class="hero">
          <div class="movie-title">
            <h3>Beyond Borders</h3>
      </div>
      <div class="countdown-timer">
        <app-countdown></app-countdown>
      </div>
      <div class="release-date-box">
        <h2 class="release-date">{{ 'RELEASE_DATE' | translate }}</h2>
      </div>
      <div class="signup-box">
        <div class="signup-inner-box">
          <h3>{{ 'SIGNUP_TITLE' | translate }}</h3>
          <div class="mailchimp-form">
            <form action="#" method="post" target="_blank" novalidate>
              <input type="email" name="EMAIL" placeholder="{{ 'EMAIL_PLACEHOLDER' | translate }}" required>
              <button type="submit">{{ 'NOTIFY_ME' | translate }}</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./app.component.scss']
})
export class HomeComponent {
  constructor(private translate: TranslateService) {}
}
