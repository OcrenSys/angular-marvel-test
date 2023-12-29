import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { ApiInterceptor } from './services/interceptors/api.interceptor';
import { provideStore } from '@ngrx/store';
import { Reducers } from './state/reducers';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideEffects } from '@ngrx/effects';
import { ComicsEffect } from './state/effects/comics.effect';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withInterceptors([ApiInterceptor])),
    provideClientHydration(),
    provideAnimations(),
    provideStore(Reducers),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
    provideEffects([ComicsEffect]),
  ],
};
