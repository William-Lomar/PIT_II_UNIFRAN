import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { PerfilComponent } from './perfil/perfil.component';
import { CupcakesComponent } from './cupcakes/cupcakes.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { InicioComponent } from './inicio/inicio.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatTabsModule,
    PerfilComponent,
    CupcakesComponent,
    CarrinhoComponent,
    InicioComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
