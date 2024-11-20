import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PerfilComponent } from './perfil/perfil.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { CupcakesComponent } from './cupcakes/cupcakes.component';

export const routes: Routes = [
    { path: "login", component: LoginComponent },
    { path: "home", component: HomeComponent },
    { path: "perfil", component: PerfilComponent },
    { path: "carrinho", component: CarrinhoComponent },
    { path: "cupcakes", component: CupcakesComponent },
    { path: "", redirectTo: "login", pathMatch: 'full' },
    { path: "**", redirectTo: "login", pathMatch: 'full' }
];
