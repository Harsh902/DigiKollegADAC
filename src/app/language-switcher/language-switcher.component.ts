// language-switcher.component.ts
import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-language-switcher',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  template: `
    <select (change)="changeLang($event)" [value]="currentLang">
      <option value="en">🇬🇧 English</option>
      <option value="de">🇩🇪 Deutsch</option>
      <option value="cs">🇨🇿 Čeština</option>
    </select>
  `,
  styles: [`
    select {
      margin-left: auto;
      padding: 4px 8px;
    }
  `]
})
export class LanguageSwitcherComponent {
  currentLang: string;

  constructor(private translate: TranslateService) {
    this.currentLang = this.translate.currentLang || this.translate.getDefaultLang();
  }

  changeLang(event: Event) {
  const select = event.target as HTMLSelectElement | null;
  if (select) {
    const lang = select.value;
    this.translate.use(lang);
    this.currentLang = lang;
  }
}

}
