import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  @Input() title!: string;
  @Input() contents!: string[];

  contentsToString(): string {
    let finalString: string = '';
    this.contents.forEach((element) => {
      this.contents.indexOf(element) !== this.contents.length - 1
        ? (finalString += element + ',' + ' ')
        : (finalString += element);
    });
    return finalString;
  }
}
