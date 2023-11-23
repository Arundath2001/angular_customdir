import { Directive, ElementRef, HostListener } from '@angular/core';
@Directive({
  selector: '[appImagestyle]'
})
export class ImagestyleDirective {

  constructor(private el: ElementRef) {
    const value: HTMLElement = this.el.nativeElement;
    value.style.width = '165px';
    value.style.borderRadius = '15px';
  }
  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.style.transform = 'scale(1.2)';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.transform = 'scale(1)';
  }
}
