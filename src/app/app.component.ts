import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';
import { RouterModule } from '@angular/router';
import { CountdownComponent } from './countdown.component';
import { LanguageSwitcherComponent } from './language-switcher/language-switcher.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, 
    CountdownComponent, 
    LanguageSwitcherComponent, 
    TranslateModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations: [
    trigger('routeFadeAnimation', [
      transition(':enter', [
        style({ opacity: 0.5 }),
        animate('900ms ease', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('900ms ease', style({ opacity: 0.5 }))
      ])
    ])
  ]
})
export class AppComponent {
  title = 'movie-name';

  // For router-outlet animation
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
