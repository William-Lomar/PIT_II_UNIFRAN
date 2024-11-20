import { Application } from "express";
import { HealthController } from "./controllers/health";

/**
 * Carrega as rotas da aplicação
 * @param app 
 */
export function loadRoutes(app: Application) {
    console.log("Carregando rotas...");
    HealthController(app);
}