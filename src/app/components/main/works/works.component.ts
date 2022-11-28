import { Component } from '@angular/core';
import { Work } from './Work';
import { WORKS } from './Works';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss'],
})
export class WorksComponent {
  works: Work[] = WORKS;
}
