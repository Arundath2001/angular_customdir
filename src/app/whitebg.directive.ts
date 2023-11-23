import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appWhitebg]'
})
export class WhitebgDirective {

  constructor(private el: ElementRef) {
    const value: HTMLElement = this.el.nativeElement;
    value.style.display = 'flex';
    value.style.flexDirection = 'column';
    value.style.padding = '40px';
    value.style.gap = '30px';
    value.style.backgroundColor = 'gray';
    value.style.borderRadius = '20px';
  }

}
