import { Component } from '@angular/core';
import { IItem, ItemComponent } from './item/item.component';
import { FormatMoneyPipe } from '../../shared/formatMoney.pipe';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carrinho',
  standalone: true,
  imports: [ItemComponent, FormatMoneyPipe, CommonModule],
  templateUrl: './carrinho.component.html',
  styleUrl: './carrinho.component.scss'
})
export class CarrinhoComponent {
  protected total: number = 0;
  protected totalItens: number = 0;

  protected items: IItem[] = [];

  comprar() {
    console.log("Carmae");
  }
}
