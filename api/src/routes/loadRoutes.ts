import { Application } from "express";
import { HealthController } from "./controllers/health";
import { CarrinhoController } from "./controllers/carrinho";
import { InicioController } from "./controllers/inicio";
import { PerfilController } from "./controllers/perfil";
import { LoginController } from "./controllers/login";
import { OpcoesController } from "./controllers/opcoes";

/**
 * Carrega as rotas da aplicação
 * @param app 
 */
export function loadRoutes(app: Application) {
    console.log("Carregando rotas...");
    HealthController(app);
    InicioController(app);
    CarrinhoController(app);
    PerfilController(app);
    LoginController(app);
    OpcoesController(app);
}