import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutComponent } from './about.component';
import { ContactComponent } from './contact.component';


export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./home.component').then(m => m.HomeComponent)
  },
  {
    path: 'about',
    loadComponent: () => import('./about.component').then(m => m.AboutComponent)
  },
  {
    path: 'contact',
    loadComponent: () => import('./contact.component').then(m => m.ContactComponent)
  }
];
