import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: (): any =>
      import('./pages/dashboard/dashboard.component').then(
        (module) => module.DashboardComponent
      ),
  },

  {
    path: 'comics',
    pathMatch: 'full',
    loadComponent: (): any =>
      import('./pages/comics/comics.component').then(
        (module) => module.ComicsComponent
      ),
  },
  {
    path: 'characters',
    pathMatch: 'full',
    loadComponent: (): any =>
      import('./pages/characters/characters.component').then(
        (module) => module.CharactersComponent
      ),
  },
];
