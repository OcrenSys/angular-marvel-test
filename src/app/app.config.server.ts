import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';
import {
  provideHttpClient,
  withInterceptors,
} from '@angular/common/http';
import { AppInterceptor } from './services/interceptor/interceptor.interceptor';

const serverConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withInterceptors([AppInterceptor])),
    provideServerRendering(),
  ],
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
