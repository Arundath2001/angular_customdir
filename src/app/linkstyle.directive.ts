import { Directive, ElementRef, HostListener } from '@angular/core';
@Directive({
  selector: '[appLinkStyle]'
})
export class LinkstyleDirective {
  constructor(private el: ElementRef) {
    this.el.nativeElement.style.textDecoration = 'none';
    this.el.nativeElement.style.color = 'black';
    this.el.nativeElement.style.fontSize = '18px';
    this.el.nativeElement.style.fontFamily = 'Poppins';
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.style.color = 'lightgrey';
    this.el.nativeElement.style.fontSize = '15px';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.color = 'black';
    this.el.nativeElement.style.fontSize = '18px';
  }
}
