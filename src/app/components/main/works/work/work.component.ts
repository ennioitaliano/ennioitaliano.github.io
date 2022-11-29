import { Component, Input } from '@angular/core';
import { Work } from '../Work';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss'],
})
export class WorkComponent {
  @Input() work!: Work;
  faGithub = faGithub;
  faGlobe = faGlobe;
}
