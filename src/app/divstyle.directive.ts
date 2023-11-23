import { Directive, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDivStyle]'
})
export class DivStyleDirective {

  constructor(private el: ElementRef) {
    const value: HTMLElement = this.el.nativeElement;
    value.style.height = '90vh';
    value.style.backgroundRepeat = 'no-repeat' ;
    value.style.backgroundPosition = 'center' ;
    value.style.backgroundSize = 'cover' ;
    value.style.display = 'flex';
    value.style.flexDirection = 'column';
    value.style.alignItems = 'center';
    value.style.padding = '20px';
  }
}
