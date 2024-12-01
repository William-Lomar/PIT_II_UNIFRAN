import { Injectable } from '@angular/core';
import { IItem } from '../home.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  constructor() { }

  adicionarItem(item: IItem): Observable<IItem> {
    return of(item)
  }

  listarCarrinho(): Observable<IItem[]> {
    return of([
      {
        id: 1,
        nome: 'teste',
        valor: 5,
        quantidade: 1,
        imgUrl: 'cupcakes.png'
      },
      {
        id: 1,
        nome: 'teste',
        valor: 5,
        quantidade: 1,
        imgUrl: 'cupcakes.png'
      },
      {
        id: 1,
        nome: 'teste',
        valor: 5,
        quantidade: 1,
        imgUrl: 'cupcakes.png'
      },
      {
        id: 1,
        nome: 'teste',
        valor: 5,
        quantidade: 1,
        imgUrl: 'cupcakes.png'
      },
      {
        id: 1,
        nome: 'teste',
        valor: 5,
        quantidade: 1,
        imgUrl: 'cupcakes.png'
      }, {
        id: 1,
        nome: 'teste',
        valor: 5,
        quantidade: 1,
        imgUrl: 'cupcakes.png'
      }, {
        id: 1,
        nome: 'teste',
        valor: 5,
        quantidade: 1,
        imgUrl: 'cupcakes.png'
      }, {
        id: 1,
        nome: 'teste',
        valor: 5,
        quantidade: 1,
        imgUrl: 'cupcakes.png'
      }, {
        id: 1,
        nome: 'teste',
        valor: 5,
        quantidade: 1,
        imgUrl: 'cupcakes.png'
      }, {
        id: 1,
        nome: 'teste',
        valor: 5,
        quantidade: 1,
        imgUrl: 'cupcakes.png'
      }, {
        id: 1,
        nome: 'teste',
        valor: 5,
        quantidade: 1,
        imgUrl: 'cupcakes.png'
      },
    ]);
  }

  finalizarCompra(): Observable<boolean> {
    return of(true);
  }
}
