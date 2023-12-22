import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppInterceptor } from './services/interceptor/interceptor.interceptor';

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AppInterceptor,
      multi: true,
    },
  ],
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
