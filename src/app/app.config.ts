import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { AppRoutes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { ApiInterceptor } from './services/interceptors/api.interceptor';
import { provideStore } from '@ngrx/store';
import { AppReducers } from './state/reducers/app.reducers';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideEffects } from '@ngrx/effects';
import { ComicsEffect } from './state/effects/comics.effect';
import { AppEffects } from './state/effects/app.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(AppRoutes),
    provideHttpClient(withInterceptors([ApiInterceptor])),
    provideClientHydration(),
    provideAnimations(),
    provideStore(AppReducers),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
    provideEffects(AppEffects),
  ],
};
