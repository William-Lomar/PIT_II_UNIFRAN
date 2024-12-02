import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUsuario } from './perfil.component';
import { HttpClient } from '@angular/common/http';
import { LoginService } from '../../login/login.service';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {

  constructor(
    private http: HttpClient,
    private loginService: LoginService
  ) { }

  getInfoUsuario(): Observable<IUsuario> {
    return this.http.get<IUsuario>('http://localhost:3000/perfil', { params: { idUsuario: this.loginService.usuarioLogado?.id ?? '' } })
  }
}
