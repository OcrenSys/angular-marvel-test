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
];
