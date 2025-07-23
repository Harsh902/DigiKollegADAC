

import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CountdownComponent } from './countdown.component';
import { LanguageSwitcherComponent } from './language-switcher/language-switcher.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, CountdownComponent, LanguageSwitcherComponent, TranslateModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'movie-name';
}
