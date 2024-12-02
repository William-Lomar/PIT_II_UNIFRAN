import { Component } from '@angular/core';
import { CupcakeComponent } from './cupcake/cupcake.component';
import { FormatMoneyPipe } from '../../shared/formatMoney.pipe';
import { CommonModule } from '@angular/common';
import { ICupcake } from '../home.model';
import { CarrinhoService } from './carrinho.service';
import { AlertService } from '../../shared/alert/alert.service';

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
    private carrinhoService: CarrinhoService,
    private alertService: AlertService
  ) { }

  comprar() {
    this.carrinhoService.finalizarCompra().subscribe({
      next: () => {
        this.cupcakes = [];
        this.total = 0;
        this.alertService.alert("Compra realizada com sucesso!");
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
