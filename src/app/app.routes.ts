import { Routes } from '@angular/router';
import { ComicService } from './services/comics/comic.service';
import { StoryDetailsComponent } from './pages/stories/details/details.component';

export const AppRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    providers: [ComicService],
    loadComponent: (): any =>
      import(
        /* webpackChunkName: "__Chunk__DashboardComponent__" */
        './pages/dashboards/dashboard/dashboard.component'
      ).then((module) => module.DashboardComponent),
  },
  {
    path: 'comics',
    pathMatch: 'full',
    loadComponent: (): any =>
      import(
        /* webpackChunkName: "__Chunk__ComicsListComponent__" */
        './pages/comics/list/list.component'
      ).then((module) => module.ComicsListComponent),
  },
  {
    path: 'comics/:id',
    pathMatch: 'full',
    loadComponent: (): any =>
      import(
        /* webpackChunkName: "__Chunk__ComicDetailsComponent__" */
        './pages/comics/details/details.component'
      ).then((module) => module.ComicDetailsComponent),
  },
  {
    path: 'characters',
    pathMatch: 'full',
    loadComponent: (): any =>
      import(
        /* webpackChunkName: "__Chunk__CharactersListComponent__" */
        './pages/characters/list/list.component'
      ).then((module) => module.CharactersListComponent),
  },
  {
    path: 'characters/:id',
    pathMatch: 'full',
    loadComponent: (): any =>
      import(
        /* webpackChunkName: "__Chunk__CharacterDetailsComponent__" */
        './pages/characters/details/details.component'
      ).then((module) => module.CharcterDetailsComponent),
  },
  {
    path: 'stories',
    pathMatch: 'full',
    loadComponent: (): any =>
      import(
        /* webpackChunkName: "__Chunk__CharactersListComponent__" */
        './pages/stories/list/list.component'
      ).then((module) => module.StoriesListComponent),
  },
  {
    path: 'stories/:id',
    pathMatch: 'full',
    loadComponent: (): any =>
      import(
        /* webpackChunkName: "__Chunk__CharacterDetailsComponent__" */
        './pages/stories/details/details.component'
      ).then((module) => module.StoryDetailsComponent),
  },
  {
    path: 'events',
    pathMatch: 'full',
    loadComponent: (): any =>
      import(
        /* webpackChunkName: "__Chunk__CharactersListComponent__" */
        './pages/events/list/list.component'
      ).then((module) => module.EventsListComponent),
  },
  {
    path: 'events/:id',
    pathMatch: 'full',
    loadComponent: (): any =>
      import(
        /* webpackChunkName: "__Chunk__CharacterDetailsComponent__" */
        './pages/events/details/details.component'
      ).then((module) => module.EventDetailsComponent),
  },
  {
    path: 'creators',
    pathMatch: 'full',
    loadComponent: (): any =>
      import(
        /* webpackChunkName: "__Chunk__CharactersListComponent__" */
        './pages/creators/list/list.component'
      ).then((module) => module.CreatorsListComponent),
  },
  {
    path: 'creators/:id',
    pathMatch: 'full',
    loadComponent: (): any =>
      import(
        /* webpackChunkName: "__Chunk__CharacterDetailsComponent__" */
        './pages/creators/details/details.component'
      ).then((module) => module.CreatorDetailsComponent),
  },
];
