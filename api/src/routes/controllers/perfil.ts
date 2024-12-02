import { Application } from "express";
import { UsuarioDAO } from "../../bd/usuario.dao";

export function PerfilController(app: Application) {
    console.log('/perfil');
    app.get('/perfil', async (req, res) => {
        res.json(await UsuarioDAO.getInfo(Number(req.query.idUsuario)))
    })
}