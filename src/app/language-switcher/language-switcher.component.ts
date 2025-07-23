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
    <div class="lang-dropdown" [class.open]="dropdownOpen" (mouseleave)="dropdownOpen = false">
      <button class="dropdown-toggle" (click)="toggleDropdown()">
        <img [src]="selectedLang.flag" [alt]="selectedLang.label + ' flag'" class="flag-icon" />
        {{ selectedLang.label }}
        <span class="arrow">▼</span>
      </button>
      <ul class="dropdown-menu" *ngIf="dropdownOpen">
        <li *ngFor="let lang of languages" (click)="setLang(lang.code); dropdownOpen = false" [class.selected]="currentLang === lang.code">
          <img [src]="lang.flag" [alt]="lang.label + ' flag'" class="flag-icon" />
          {{ lang.label }}
        </li>
      </ul>
    </div>
  `,
  styles: [`
    .lang-dropdown {
      position: relative;
      display: inline-block;
      min-width: 120px;
    }
    .dropdown-toggle {
      display: flex;
      align-items: center;
      gap: 0.4rem;
      background: #fff;
      border: 1px solid #ccc;
      border-radius: 4px;
      padding: 4px 12px;
      cursor: pointer;
      font-size: 1rem;
      min-width: 110px;
      transition: border 0.2s, background 0.2s;
      color: #000;
    }
    .dropdown-toggle:focus {
      outline: 2px solid #ffe600;
    }
    .arrow {
      font-size: 0.8em;
      margin-left: 0.3em;
    }
    .dropdown-menu {
      position: absolute;
      left: 0;
      top: 110%;
      background: #fff;
      border: 1px solid #ccc;
      border-radius: 4px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.08);
      min-width: 120px;
      z-index: 100;
      padding: 0.2rem 0;
      margin: 0;
      list-style: none;
    }
    .dropdown-menu li {
      display: flex;
      align-items: center;
      gap: 0.4rem;
      padding: 6px 14px;
      cursor: pointer;
      font-size: 1rem;
      transition: background 0.15s;
      color: #000;
    }
    .dropdown-menu li.selected,
    .dropdown-menu li:hover {
      background: #fffbe6;
    }
    .flag-icon {
      width: 22px;
      height: 16px;
      object-fit: contain;
      border-radius: 2px;
      box-shadow: 0 1px 2px rgba(0,0,0,0.07);
    }
  `]
})
export class LanguageSwitcherComponent {
  currentLang: string;
  dropdownOpen = false;
  languages = [
    { code: 'en', label: 'English', flag: 'assets/flags/gb.svg' },
    { code: 'de', label: 'Deutsch', flag: 'assets/flags/de.svg' },
    { code: 'cs', label: 'Čeština', flag: 'assets/flags/cz.svg' }
  ];

  get selectedLang() {
    return this.languages.find(l => l.code === this.currentLang) || this.languages[0];
  }

  constructor(private translate: TranslateService) {
    this.currentLang = this.translate.currentLang || this.translate.getDefaultLang();
  }

  setLang(lang: string) {
    this.translate.use(lang);
    this.currentLang = lang;
  }

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }
}
