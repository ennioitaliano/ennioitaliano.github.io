import { Component, ElementRef } from '@angular/core';
import { Social } from './Social';
import { SOCIALS } from './Socials';


@Component({
  selector: 'app-socials',
  templateUrl: './socials.component.html',
  styleUrls: ['./socials.component.scss'],
})
export class SocialsComponent {
  socials: Social[] = SOCIALS;

  fontSizeHeader = 'clamp(1.4rem, 1.4rem + 1vw, 1.65rem)';
  fontSizeFooter = 'clamp(1.2rem, 1.2rem + 1vw, 1.4rem);';

  parent = this.elRef.nativeElement.parentElement.tagName;

  constructor(private elRef: ElementRef) {}
}
