// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    // private http: HttpClient
  ) { }

  login(): Observable<boolean> {
    return of(true)
  }
}
