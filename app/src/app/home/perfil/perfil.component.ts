import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { PerfilService } from './perfil.service';

export interface IUsuario {
  id: number,
  nome: string,
  email: string,
  endereco: string,
  qntPedidos: number
}

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [MatListModule],
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.scss'
})
export class PerfilComponent {
  protected usuario?: IUsuario;

  constructor(
    private perfilService: PerfilService
  ) { }

  tabSelecionada(): void {
    this.perfilService.getInfoUsuario().subscribe({
      next: (usuario) => {
        console.log(usuario);
        
        this.usuario = usuario;
      }
    })
  }
}
