import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IOpcao } from './cupcakes.component';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CupcakesService {

  constructor(
    private http: HttpClient
  ) { }

  listarOpcoes(): Observable<IOpcao[]> {
    return this.http.get<IOpcao[]>('http://localhost:3000/opcoes')
  }
}
