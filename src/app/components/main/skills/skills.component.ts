import { Component } from '@angular/core';
import { Skill } from './Skill';
import { SKILLS } from './Skills';
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  skills: Skill[] = SKILLS;
}
