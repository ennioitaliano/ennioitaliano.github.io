import { Component, Input } from '@angular/core';
import { Skill } from '../Skill';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss'],
})
export class SkillComponent {
  @Input() skill!: Skill;

  fieldToString(field: string[]): string {
    let finalString: string = '';
    field.forEach((element) => {
      field.indexOf(element) !== field.length - 1
        ? (finalString += element + ',' + ' ')
        : (finalString += element);
    });
    return finalString;
  }
}
