import { Injectable } from '@angular/core';
import { ICupcake } from '../home.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { LoginService } from '../../login/login.service';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  constructor(
    private http: HttpClient,
    private loginService: LoginService
  ) { }

  adicionarItem(cupcake: ICupcake): Observable<ICupcake> {
    return this.http.post<ICupcake>('http://localhost:3000/carrinho', { idUsuario: this.loginService.usuarioLogado?.id, cupcake })
  }

  listarCarrinho(): Observable<ICupcake[]> {
    return this.http.get<ICupcake[]>('http://localhost:3000/carrinho', { params: { idUsuario: this.loginService.usuarioLogado?.id ?? '' } })
  }

  finalizarCompra(): Observable<boolean> {
    return this.http.post<boolean>('http://localhost:3000/carrinho/comprar', { idUsuario: this.loginService.usuarioLogado?.id })
  }
}
