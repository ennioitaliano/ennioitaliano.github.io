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
  }

  darkModeSwitcher(forces?: boolean) {
    //console.log('Dark mode prima dello switch ' + this.darkMode);

    if (typeof forces == 'boolean') {
      // DARK MODE LETTA E ATTIVATA DAL COSTRUTTORE
      document.documentElement.classList.toggle('dark-mode', forces);

      /* console.log(
          'DARK MODE LETTA E ATTIVATA DAL COSTRUTTORE\nForces è ' +
            typeof forces +
            '\ndarkMode è ' +
            this.darkMode +
            '\nsubject è ' +
            this.subject
        );*/
    }
    // DARK MODE SWITCHATA MANUALMENTE
    else if (typeof forces == 'undefined') {
      document.documentElement.classList.toggle('dark-mode');
      this.darkMode = !this.darkMode;

      /*console.log(
        'DARK MODE SWITCHATA MANUALMENTE\nIl tema è cambiato\nForces è ' +
          typeof forces +
          '\ndarkMode è ' +
          this.darkMode +
          '\nsubject è ' +
          this.subject
      );*/

      this.subject.next(this.darkMode);
    }
  }

  onToggle(): Observable<boolean> {
    return this.subject.asObservable();
  }
}
