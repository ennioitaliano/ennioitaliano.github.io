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
    document.documentElement.classList.toggle('dark-mode');
    this.darkMode = !this.darkMode;
    this.subject.next(this.darkMode);
  }

  onToggle(): Observable<boolean> {
    return this.subject.asObservable();
  }
}
