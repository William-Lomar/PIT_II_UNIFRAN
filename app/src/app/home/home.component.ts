import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { PerfilComponent } from './perfil/perfil.component';
import { CupcakesComponent } from './cupcakes/cupcakes.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { InicioComponent } from './inicio/inicio.component';
import { LoginService } from '../login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatTabsModule,
    PerfilComponent,
    CupcakesComponent,
    CarrinhoComponent,
    InicioComponent,

  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements AfterViewInit {
  @ViewChild(InicioComponent) inicioComponent?: InicioComponent;
  @ViewChild(CupcakesComponent) cupcakesComponent?: CupcakesComponent;
  @ViewChild(CarrinhoComponent) carrinhoComponent?: CarrinhoComponent;
  @ViewChild(PerfilComponent) perfilComponent?: PerfilComponent;

  constructor(
    private loginService: LoginService,
    private router: Router
  ) {
    if (!this.loginService.usuarioLogado) {
      this.router.navigate(['/'])
    }
  }

  ngAfterViewInit(): void {
    this.inicioComponent?.tabSelecionada();
  }

  changeTab(tabIndex: number) {
    if (tabIndex == 0) this.inicioComponent?.tabSelecionada();
    if (tabIndex == 1) this.cupcakesComponent?.tabSelecionada();
    if (tabIndex == 2) this.carrinhoComponent?.tabSelecionada();
    if (tabIndex == 3) this.perfilComponent?.tabSelecionada();
  }
}
