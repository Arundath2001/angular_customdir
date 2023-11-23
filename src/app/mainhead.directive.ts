import { Directive, ElementRef } from '@angular/core';
@Directive({
  selector: '[appMainhead]'
})
export class MainheadDirective {

  constructor(private el: ElementRef) { 
    this.el.nativeElement.style.fontSize = '50px';
    this.el.nativeElement.style.padding = '50px';
    this.el.nativeElement.style.color = 'white';
    this.el.nativeElement.style.fontFamily = 'Merriweather';
  }

}
