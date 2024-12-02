import { Application } from "express";
import { IUsuario } from "../../model";
import { UsuarioDAO } from "../../bd/usuario.dao";

export function LoginController(app: Application) {
    console.log('/login');
    app.post('/login', (req, res) => {
        const usuarioInfo = req.body as { usuario: string, senha: string };

        const usuario: IUsuario = {
            id: 1,
            email: 'lomarw99@gmail.com.br',
            endereco: 'Serra/ES',
            nome: usuarioInfo.usuario,
            qntPedidos: 0
        }

        UsuarioDAO.setUsuario(usuario)
        res.json(usuario)
    })
}