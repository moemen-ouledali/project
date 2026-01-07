import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlighTitle]'
})
export class HighlighTitleDirective {

  constructor(private el: ElementRef) {}

  @HostListener('mouseenter')
  onMouseEnter() {
    this.el.nativeElement.style.backgroundColor = '#c8e6c9';
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.el.nativeElement.style.backgroundColor = 'transparent';
  }
}
