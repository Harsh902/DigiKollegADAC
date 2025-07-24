import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  template: `
    <div class="page-content">
      <h2>{{ 'CONTACT' | translate }}</h2>
    <p>{{ 'CONTACT_DESCRIPTION' | translate }}</p>
    </div>
  `,
  styles: [`
    .page-content { padding: 2rem; max-width: 600px; margin: 0 auto; }
    h2 { color: #00205b; }
    p { color: #222; }
    a { color: #00205b; }
  `],
  imports: [TranslateModule]
})
export class ContactComponent {
  constructor(private translate: TranslateService) {}
}
