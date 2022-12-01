import { Component } from '@angular/core';
import { DarkModeService } from 'src/app/services/dark-mode.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
  subscription!: Subscription;
  darkMode: boolean = this.darkModeService.darkMode;

  constructor(private darkModeService: DarkModeService) {

    this.subscription = this.darkModeService
      .onToggle()
      .subscribe((value) => (this.darkMode = value));
  }

  toggleDarkMode() {
    this.darkModeService.darkModeSwitcher();
  }
}
