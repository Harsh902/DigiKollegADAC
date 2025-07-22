

import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CountdownComponent } from './countdown.component';
import { LanguageSwitcherComponent } from './language-switcher/language-switcher.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, CountdownComponent, LanguageSwitcherComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'movie-name';
}
