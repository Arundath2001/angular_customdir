import { Directive, ElementRef, HostListener } from '@angular/core';
@Directive({
  selector: '[appButtonstyle]'
})
export class ButtonstyleDirective {
  constructor(private el: ElementRef) {
    this.setStyle();
  }
  private setStyle(): void {
    const value: HTMLElement = this.el.nativeElement;
    value.style.background = 'linear-gradient(to right, #ff416c, #ff4b2b)';
    value.style.border = 'none';
    value.style.color = '#ffffff';
    value.style.padding = '10px 20px';
    value.style.textAlign = 'center';
    value.style.display = 'inline-block';
    value.style.fontSize = '16px';
    value.style.borderRadius = '15px';
    value.style.transform = 'scale(1.2px)';

    
  }
  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.style.color = 'black';
    this.el.nativeElement.style.transform = 'scale(1.2)';
    
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.color = 'white';
    this.el.nativeElement.style.transform = 'scale(1)';
  }
}
