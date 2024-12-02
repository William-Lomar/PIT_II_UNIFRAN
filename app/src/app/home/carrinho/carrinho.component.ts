import { Component } from '@angular/core';
import { CupcakeComponent } from './cupcake/cupcake.component';
import { FormatMoneyPipe } from '../../shared/formatMoney.pipe';
import { CommonModule } from '@angular/common';
import { ICupcake } from '../home.model';
import { CarrinhoService } from './carrinho.service';

@Component({
  selector: 'app-carrinho',
  standalone: true,
  imports: [CupcakeComponent, FormatMoneyPipe, CommonModule],
  templateUrl: './carrinho.component.html',
  styleUrl: './carrinho.component.scss'
})
export class CarrinhoComponent {
  protected total: number = 0;
  protected cupcakes: ICupcake[] = [];

  constructor(
    private carrinhoService: CarrinhoService
  ) { }

  comprar() {
    this.carrinhoService.finalizarCompra().subscribe({
      next: () => {
        this.cupcakes = [];
        this.total = 0;
        console.log("sucess");
      }
    })
  }

  tabSelecionada(): void {
    this.carrinhoService.listarCarrinho().subscribe({
      next: (cupcakes) => {
        this.cupcakes = cupcakes;
        this.total = cupcakes.reduce((total, item) => total + item.valor, 0);
      }
    })
  }
}
