import { Directive, ElementRef, Renderer2 } from '@angular/core';
@Directive({
  selector: '[appHeadStyle]'
})
export class HeadStyleDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}
  ngOnInit() {
    this.setStyle();
  }
  private setStyle(): void {
    const value: HTMLElement = this.el.nativeElement;

    value.style.color = 'white';
    value.style.fontWeight = 'bold';
    value.style.fontSize = '20px';
    value.style.fontFamily = 'Poppins';
  }
}
