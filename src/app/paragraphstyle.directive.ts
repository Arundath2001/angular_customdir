import { Directive, ElementRef } from '@angular/core';
@Directive({
  selector: '[appParagraphstyle]'
})
export class ParagraphstyleDirective {

  constructor(private el: ElementRef) { 
    this.el.nativeElement.style.fontSize = '15px';
    this.el.nativeElement.style.padding = '5px';
    this.el.nativeElement.style.color = 'white';
    this.el.nativeElement.style.width = '800px';
    this.el.nativeElement.style.fontFamily = 'Manrope';

  }

}
