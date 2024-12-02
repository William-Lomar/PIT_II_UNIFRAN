import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICupcake } from '../home.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InicioService {

  constructor(
    private http: HttpClient
  ) { }

  listarFavoritos(): Observable<ICupcake[]> {
    return this.http.get<ICupcake[]>('http://localhost:3000/favoritos')
  }
}
