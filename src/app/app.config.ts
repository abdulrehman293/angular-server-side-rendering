// src/app/app.config.ts
import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    // Enables non-destructive hydration and buffers early user clicks
    provideClientHydration(withEventReplay()),
    // withFetch() is required for SSR to make HTTP calls natively in Node
    provideHttpClient(withFetch())
  ]
};
