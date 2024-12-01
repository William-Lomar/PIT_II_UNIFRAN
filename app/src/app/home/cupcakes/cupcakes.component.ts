import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCheckboxChange, MatCheckboxModule } from '@angular/material/checkbox';
import { FormatMoneyPipe } from '../../shared/formatMoney.pipe';

export interface IOpcao {
  nome: string,
  valor: number,
  tipo: 'massa' | 'recheio' | 'cobertura',
  selecionada: boolean
}

@Component({
  selector: 'app-cupcakes',
  standalone: true,
  imports: [MatCheckboxModule, FormsModule, CommonModule, FormatMoneyPipe],
  templateUrl: './cupcakes.component.html',
  styleUrl: './cupcakes.component.scss'
})
export class CupcakesComponent {

  protected opcoesMassa: IOpcao[] = [];
  protected opcoesRecheio: IOpcao[] = [];
  protected opcoesCobertura: IOpcao[] = [];

  protected total: number = 0;

  constructor() {
    this.opcoesMassa.push({ nome: 'Chocolate', tipo: 'massa', valor: 1.99, selecionada: false })
    this.opcoesRecheio.push({ nome: 'Brigadeiro', tipo: 'recheio', valor: 8.50, selecionada: false })
    this.opcoesCobertura.push({ nome: 'Marshmellow', tipo: 'cobertura', valor: 8.90, selecionada: false })
  }

  selectionChange(event: MatCheckboxChange, opcao: IOpcao) {
    opcao.selecionada = event.checked
    this.calcularTotal();
  }

  private calcularTotal() {
    const opcoes = [...this.opcoesMassa, ...this.opcoesRecheio, ...this.opcoesCobertura];
    this.total = opcoes
      .filter(opcao => opcao.selecionada)
      .reduce((total, opcao) => total + opcao.valor, 0);
  }

  fazerPedido() {
    console.log("carmae");
  }
}
