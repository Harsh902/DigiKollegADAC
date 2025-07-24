import { Component } from '@angular/core';
import { CountdownComponent } from './countdown.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CountdownComponent, TranslateModule, FormsModule, CommonModule],
  template: `
    <section class="hero">
          <div class="movie-title">
            <h3>Beyond Borders</h3>
      </div>
      <div class="countdown-timer">
        <app-countdown></app-countdown>
      </div>
      <div class="release-date-box">
        <h2 class="release-date">{{ 'MOVIE_TITLE' | translate }} {{ 'RELEASE_DATE' | translate }}</h2>
      </div>
      <div class="video-button-box">
        <button (click)="toggleVideo()" class="play-video-btn">{{ 'Play Trailer' | translate }}</button>
      </div>
      <div *ngIf="showVideo" class="video-modal">
        <div class="video-modal-content">
          <button class="close-btn" (click)="toggleVideo()">&times;</button>
          <video width="560" height="315" controls autoplay>
            <source src="/assets/videos/VID-20250724-WA0006.mp4" type="video/mp4">
            Your browser does not support the video tag.
          </video>
        </div>
        <div class="video-modal-backdrop" (click)="showVideo = false"></div>
      </div>
      <div class="signup-box">
        <div class="signup-inner-box">
          <h3>{{ 'SIGNUP_TITLE' | translate }}</h3>
          <div class="mailchimp-form">
            <form (ngSubmit)="submitEmail()" #signupForm="ngForm">
              <input type="email" name="EMAIL" [(ngModel)]="email" required placeholder="{{ 'EMAIL_PLACEHOLDER' | translate }}">
              <button type="submit">{{ 'NOTIFY_ME' | translate }}</button>
            </form>
            <div *ngIf="success">{{ 'SIGNUP' | translate }}</div>
            <div *ngIf="error">{{ error }}</div>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./app.component.scss']
})
export class HomeComponent {
  email = '';
  success = false;
  error = '';

  showVideo = false;

  toggleVideo() {
    this.showVideo = !this.showVideo;
  }

  constructor(private translate: TranslateService, private http: HttpClient) {}

  submitEmail() {
    if (!this.email) {
      this.error = 'Please enter a valid email.';
      this.success = false;
      return;
    }
    this.http.post('http://localhost:3000/api/signup', { email: this.email }).subscribe({
      next: () => {
        this.success = true;
        this.error = '';
        this.email = '';
      },
      error: () => {
        this.error = 'Signup failed. Try again.';
        this.success = false;
      }
    });
  }
}
