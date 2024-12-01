import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IUsuario } from './perfil.component';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {

  constructor() { }

  getInfoUsuario(): Observable<IUsuario> {
    return of({ nome: 'William', email: 't', id: 1, endereco: 'das' })
  }
}
