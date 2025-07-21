

import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CountdownComponent } from './countdown.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, CountdownComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'movie-name';
}
