import { Component } from '@angular/core';
import { DarkModeService } from 'src/app/services/dark-mode.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-opening',
  templateUrl: './opening.component.html',
  styleUrls: ['./opening.component.scss'],
})
export class OpeningComponent {
  subscription!: Subscription;
  darkMode: boolean = false;

  constructor(private darkModeService: DarkModeService) {
    this.subscription = this.darkModeService
      .onToggle()
      .subscribe((value) => (this.darkMode = value));
  }
}
