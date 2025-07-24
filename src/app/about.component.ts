import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <div class="page-content">
      <h2>{{ 'ABOUT' | translate }}</h2>
      <p>{{ 'ABOUT_DESCRIPTION' | translate }}</p>
    </div>
  `,
  styles: [`
    .page-content { padding: 2rem; max-width: 600px; margin: 0 auto; }
    h2 { color: #00205b; }
    p { color: #222; }
  `],
  imports: [TranslateModule]
})
export class AboutComponent {

  constructor(private translate: TranslateService) {}

}
