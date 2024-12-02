import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap, Observable } from 'rxjs';
import { IUsuario } from '../home/perfil/perfil.component';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  usuarioLogado?: IUsuario;

  constructor(
    private http: HttpClient
  ) { }

  login(usuario: { usuario: string, senha: string }): Observable<IUsuario> {
    return this.http.post<IUsuario>('http://localhost:3000/login', usuario).pipe(
      tap(usuario => {
        this.usuarioLogado = usuario;
      })
    )
  }
}
