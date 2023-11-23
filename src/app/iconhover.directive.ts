import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appIconHover]'
})
export class IconHoverDirective {
  constructor(private el: ElementRef) {
    this.el.nativeElement.style.color = 'red';
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.style.color = 'lightgrey';
    this.el.nativeElement.style.fontSize = '1.2em';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.color = 'red';
  }
}
