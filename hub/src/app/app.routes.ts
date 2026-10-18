import { Routes } from '@angular/router';
import { Home } from './home/home';
export const routes: Routes = [
  {
    path: '',
    component: Home,
    title: 'Websites for local service businesses | JarVonDigital',
  },
  {
    path: 'privacy',
    loadComponent: () => import('./privacy/privacy').then((m) => m.Privacy),
    title: 'Inquiry privacy | JarVonDigital',
  },
  { path: '**', redirectTo: '' },
];
