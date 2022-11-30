import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DarkModeService {
  darkMode: boolean = false;
  private subject = new Subject<boolean>();

  constructor() {}

  darkModeSwitcher() {
    if (this.darkMode) {
      // emettere evento per far settare la proprietà darkMode di opening.ts a false
      document.documentElement.classList.toggle('dark-mode');
      //darkModeButton.innerHTML = 'Dark Mode';
    } else {
      // emettere evento per far settare la proprietà darkMode di opening.ts a false
      document.documentElement.classList.toggle('dark-mode');
      //darkModeButton.innerHTML = 'Light Mode';
    }
  }

  onToggle(): Observable<boolean> {
    return this.subject.asObservable();
  }
}
