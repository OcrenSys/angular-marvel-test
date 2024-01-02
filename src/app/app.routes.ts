import { provideHttpClient } from '@angular/common/http';
import { Routes } from '@angular/router';
import { ComicService } from './services/comics/comic.service';

export const AppRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    providers: [ComicService],
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
    path: 'comics/:id',
    pathMatch: 'full',
    loadComponent: (): any =>
      import('./pages/comic-details/comic-details.component').then(
        (module) => module.ComicDetailsComponent
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

  {
    path: 'characters/:id',
    pathMatch: 'full',
    loadComponent: (): any =>
      import('./pages/characters/characters.component').then(
        (module) => module.CharactersComponent
      ),
  },
];
