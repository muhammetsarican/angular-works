import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appColorize]',
  standalone: true,
})
export class Colorize {

  @Input('appColorize') name = 'default';

  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onmouseenter() {
    this.el.nativeElement.innerHTML = this.name;
    this.el.nativeElement.style.backgroundColor = 'red';
  }

  @HostListener('mouseleave') onmouseleave() {
    this.el.nativeElement.style.backgroundColor = '';
  }

}
