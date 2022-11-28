import { Component, Input } from '@angular/core';
import { Work } from '../Work';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss'],
})
export class WorkComponent {
  @Input() work!: Work;


}
