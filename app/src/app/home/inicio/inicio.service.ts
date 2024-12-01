import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IItem } from '../home.model';

@Injectable({
  providedIn: 'root'
})
export class InicioService {

  constructor() { }

  listarFavoritos(): Observable<IItem[]> {
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
    },{
      id: 1,
      nome: 'teste',
      valor: 5,
      quantidade: 1,
      imgUrl: 'cupcakes.png'
    },{
      id: 1,
      nome: 'teste',
      valor: 5,
      quantidade: 1,
      imgUrl: 'cupcakes.png'
    },{
      id: 1,
      nome: 'teste',
      valor: 5,
      quantidade: 1,
      imgUrl: 'cupcakes.png'
    },{
      id: 1,
      nome: 'teste',
      valor: 5,
      quantidade: 1,
      imgUrl: 'cupcakes.png'
    },{
      id: 1,
      nome: 'teste',
      valor: 5,
      quantidade: 1,
      imgUrl: 'cupcakes.png'
    },{
      id: 1,
      nome: 'teste',
      valor: 5,
      quantidade: 1,
      imgUrl: 'cupcakes.png'
    },
  ]);
  }
}
