import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCheckboxChange, MatCheckboxModule } from '@angular/material/checkbox';
import { FormatMoneyPipe } from '../../shared/formatMoney.pipe';
import { CupcakesService } from './cupcakes.service';
import { CarrinhoService } from '../carrinho/carrinho.service';
import { IItem } from '../home.model';

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

  constructor(
    private cupcakesService: CupcakesService,
    private carrinhoService: CarrinhoService
  ) {
    this.cupcakesService.listarOpcoes().subscribe({
      next: (opcoes) => {
        for (const opcao of opcoes) {
          if (opcao.tipo == 'massa') this.opcoesMassa.push(opcao)
          else if (opcao.tipo == 'recheio') this.opcoesRecheio.push(opcao)
          else if (opcao.tipo == 'cobertura') this.opcoesCobertura.push(opcao)
        }
      }
    })
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
    const item: IItem = {
      nome: 'Customizado',
      valor: this.total,
      quantidade: 1,
    } 

    this.carrinhoService.adicionarItem(item).subscribe({
      next: () => {
        console.log("Item adicionado com sucesso!");
        this.reset();
      }
    })
  }

  private reset() {
    this.opcoesMassa.forEach(o => o.selecionada = false);
    this.opcoesRecheio.forEach(o => o.selecionada = false);
    this.opcoesCobertura.forEach(o => o.selecionada = false);
    this.calcularTotal();
  }
}
