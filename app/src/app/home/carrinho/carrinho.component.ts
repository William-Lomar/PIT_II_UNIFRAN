import { Component } from '@angular/core';
import { ItemComponent } from './item/item.component';
import { FormatMoneyPipe } from '../../shared/formatMoney.pipe';
import { CommonModule } from '@angular/common';
import { IItem } from '../home.model';
import { CarrinhoService } from './carrinho.service';

@Component({
  selector: 'app-carrinho',
  standalone: true,
  imports: [ItemComponent, FormatMoneyPipe, CommonModule],
  templateUrl: './carrinho.component.html',
  styleUrl: './carrinho.component.scss'
})
export class CarrinhoComponent {
  protected total: number = 0;
  protected items: IItem[] = [];

  constructor(
    private carrinhoService: CarrinhoService
  ) { }

  comprar() {
    this.carrinhoService.finalizarCompra().subscribe({
      next: () => {
        this.items = [];
        this.total = 0;
        console.log("sucess");
      }
    })
  }

  tabSelecionada(): void {
    this.carrinhoService.listarCarrinho().subscribe({
      next: (items) => {
        this.items = items;
        this.total = items.reduce((total, item) => total + item.valor, 0);
      }
    })
  }
}
