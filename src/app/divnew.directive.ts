import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDivnew]'
})
export class DivnewDirective {

  constructor(private el: ElementRef) {
    const value: HTMLElement = this.el.nativeElement;
    value.style.display = 'flex';
    value.style.flexDirection = 'column';
  }

}
