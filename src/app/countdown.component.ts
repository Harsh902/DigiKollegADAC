import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-countdown',
  standalone: true,
  imports: [TranslateModule],
  template: `
    <div class="countdown">
      <div class="countdown-item">
        <span class="countdown-value">{{ days }}</span>
        <span class="countdown-label">{{ 'Days' | translate }}</span>
      </div>
      <div class="countdown-item">
        <span class="countdown-value">{{ hours }}</span>
        <span class="countdown-label">{{ 'Hours' | translate }}</span>
      </div>
      <div class="countdown-item">
        <span class="countdown-value">{{ minutes }}</span>
        <span class="countdown-label">{{ 'Minutes' | translate }}</span>
      </div>
      <div class="countdown-item">
        <span class="countdown-value">{{ seconds }}</span>
        <span class="countdown-label">{{ 'Seconds' | translate }}</span>
      </div>
    </div>
  `,
  styleUrls: ['./countdown.component.scss']
})
export class CountdownComponent implements OnInit {
  // Set the target date for the countdown
  targetDate = new Date('2025-10-01T00:00:00');
  days = 0;
  hours = 0;
  minutes = 0;
  seconds = 0;
  private timer: any;
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit() {
    if (this.isBrowser) {
      this.updateCountdown();
      this.timer = setInterval(() => this.updateCountdown(), 1000);
    }
  }

  updateCountdown() {
    if (!this.isBrowser) return;
    const now = new Date();
    const diff = this.targetDate.getTime() - now.getTime();
    if (diff > 0) {
      this.days = Math.floor(diff / (1000 * 60 * 60 * 24));
      this.hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      this.minutes = Math.floor((diff / (1000 * 60)) % 60);
      this.seconds = Math.floor((diff / 1000) % 60);
    } else {
      this.days = this.hours = this.minutes = this.seconds = 0;
      if (this.timer) clearInterval(this.timer);
    }
  }
}
