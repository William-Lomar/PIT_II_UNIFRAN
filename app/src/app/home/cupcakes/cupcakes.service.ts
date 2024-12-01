import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IOpcao } from './cupcakes.component';

@Injectable({
  providedIn: 'root'
})
export class CupcakesService {

  constructor() { }

  listarOpcoes(): Observable<IOpcao[]> {
    return of([])
  }
}
