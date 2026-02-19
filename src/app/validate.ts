import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appValidate]',
})
export class Validate {

  constructor(private el: ElementRef) { }

  @HostListener('keyup') keyup() {
    this.checkInputValidation(this.el.nativeElement)
  }

  checkInputValidation(el: HTMLInputElement) {
    const id = el.id;
    const valid = el.validity.valid;

    const errorText = document.querySelector(`#${id} + p`) as HTMLParagraphElement;

    if (!valid) {
      errorText.textContent = el.validationMessage;
    } else {
      errorText.textContent = '';
    }
  }
}
