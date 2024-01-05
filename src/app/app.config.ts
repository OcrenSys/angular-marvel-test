import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';

import { AppRoutes } from './app.routes';
import { ApiInterceptor } from './services/interceptors/api.interceptor';
import { AppEffects } from './state/effects/app.effects';
import { AppReducers } from './state/reducers/app.reducers';

export const appConfig: ApplicationConfig = {
	providers: [
		provideRouter(AppRoutes),
		provideHttpClient(withInterceptors([ApiInterceptor])),
		provideClientHydration(),
		provideAnimations(),
		provideStore(AppReducers),
		provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
		provideEffects(AppEffects)
	]
};
