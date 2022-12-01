import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DarkModeService {
  media = window.matchMedia('(prefers-color-scheme: dark)');
  darkMode: boolean = this.media.matches;
  private subject = new Subject<boolean>();

  constructor() {
    console.log('Dark mode appena costruito ' + this.darkMode);

    this.darkModeSwitcher(this.darkMode);
    //this.media.addEventListener('change', this.handleEvent);
  }

  /*handleEvent() {
    this.subject = new Subject<boolean>();

    document.documentElement.classList.toggle('dark-mode');
    this.darkMode = !this.darkMode;

    console.log(
      'DARK MODE SWITCHATA CAUSA CAMBIO TEMA\nIl tema è cambiato\ndarkMode è ' +
        this.darkMode +
        '\nsubject è ' +
        this.subject
    );
    this.subject.next(this.darkMode);
  }*/

  darkModeSwitcher(forces?: boolean) {
    console.log('Dark mode prima dello switch ' + this.darkMode);

    switch (typeof forces) {
      // DARK MODE LETTA E ATTIVATA DAL COSTRUTTORE
      case 'boolean':
        document.documentElement.classList.toggle('dark-mode', forces);

        console.log(
          'DARK MODE LETTA E ATTIVATA DAL COSTRUTTORE\nForces è ' +
            typeof forces +
            '\ndarkMode è ' +
            this.darkMode +
            '\nsubject è ' +
            this.subject
        );

        break;
      // DARK MODE SWITCHATA MANUALMENTE
      case 'undefined':
        document.documentElement.classList.toggle('dark-mode');
        this.darkMode = !this.darkMode;

        console.log(
          'DARK MODE SWITCHATA MANUALMENTE\nIl tema è cambiato\nForces è ' +
            typeof forces +
            '\ndarkMode è ' +
            this.darkMode +
            '\nsubject è ' +
            this.subject
        );

        this.subject.next(this.darkMode);
        break;
    }
  }

  onToggle(): Observable<boolean> {
    return this.subject.asObservable();
  }
}
