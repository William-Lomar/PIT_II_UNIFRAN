import { AfterViewInit, Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, ViewChild } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FavoritoComponent } from './favorito/favorito.component';
import { InicioService } from './inicio.service';
import { ICupcake } from '../home.model';
import { Swiper } from 'swiper/types';
import { CommonModule } from '@angular/common';
import { CarrinhoService } from '../carrinho/carrinho.service';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    FavoritoComponent,
    CommonModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.scss'
})
export class InicioComponent implements AfterViewInit {
  @ViewChild('swiper') swiperDoc?: ElementRef

  protected favoritos: ICupcake[] = []

  constructor(
    private inicioService: InicioService,
    protected carrinhoService: CarrinhoService
  ) { }

  ngAfterViewInit(): void {
    this.inicioService.listarFavoritos().subscribe({
      next: (favoritos) => {
        this.favoritos = favoritos;
        setTimeout(() => {
          (this.swiperDoc?.nativeElement.swiper as Swiper).updateSlides();
        }, 150);
      }
    })
  }

  adicionarFavorito(favorito: ICupcake) {
    this.carrinhoService.adicionarItem(favorito).subscribe({
      next: () => {
        console.log("Add com sucesso");
      }
    })
  }

  tabSelecionada(): void {
    console.log('View');
  }
}
