import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));

// Sta roba rende l'opening meno responsive in real time verticalmente, forse ci sta o forse no
// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
//let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
//document.documentElement.style.setProperty('--vh', `${vh}px`);
