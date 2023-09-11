import { Directive, HostListener, ElementRef } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

@Directive({
  selector: '[appCurrencyInput]'
})
export class CurrencyInputDirective {

  private el: HTMLInputElement;

  constructor(
    private elementRef: ElementRef,
    private currencyPipe: CurrencyPipe
  ) {
    this.el = this.elementRef.nativeElement;
  }

  @HostListener('input', ['$event.target.value'])
  onInput(value: string) {
    // Remove todos os caracteres que não sejam dígitos
    const cleanValue = value.replace(/[^0-9]/g, '');

    // Formata o valor como moeda brasileira (BRL)
    const formattedValue = this.currencyPipe.transform(cleanValue as unknown as number / 100, 'BRL', 'symbol', '1.2-2');

    // Atualiza o valor do input
    this.el.value = formattedValue || '0,00';
  }

}