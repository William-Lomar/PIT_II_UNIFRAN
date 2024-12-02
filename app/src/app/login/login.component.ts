import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { LoginService } from './login.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  protected usuario?: string
  protected senha?: string

  constructor(
    private router: Router,
    private loginService: LoginService
  ) { }

  login() {
    //@ts-ignore
    this.loginService.login({ usuario: this.usuario, senha: this.senha }).subscribe({
      next: (autenticado) => {
        if (autenticado) this.router.navigate(['home'])
      }
    })
  }
}
