import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appSmalldivstyle]'
})
export class SmalldivstyleDirective {

  constructor(private el: ElementRef) {
    const value: HTMLElement = this.el.nativeElement;
    value.style.display = 'flex';
    value.style.flexDirection = 'row';
    value.style.padding = '20px';
    value.style.gap = '25px';
  }

}
