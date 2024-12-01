import { Pipe, type PipeTransform } from '@angular/core';

@Pipe({
  name: 'appFormatMoney',
  standalone: true,
})
export class FormatMoneyPipe implements PipeTransform {
  transform(value?: number): string {
    if (typeof value != 'number') return ''
    return value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });;
  }
}
