import { Pipe, type PipeTransform } from '@angular/core';

@Pipe({
  name: 'appFormatMoney',
  standalone: true,
})
export class FormatMoneyPipe implements PipeTransform {
  transform(value: number): string {
    return value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });;
  }
}
