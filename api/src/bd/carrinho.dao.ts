import { ICupcake } from "../model";
import { UsuarioDAO } from "./usuario.dao";

export class CarrinhoDAO {
    static mapCarrinho = new Map<number, ICupcake[]>()

    static listar(idUsuario: number): Promise<ICupcake[]> {
        return Promise.resolve(this.mapCarrinho.get(idUsuario) ?? [])
    }

    static adicionar(idUsuario: number, cupcake: ICupcake): Promise<void> {
        const cupcakes = this.mapCarrinho.get(idUsuario) ?? [];
        cupcakes.push(cupcake);
        this.mapCarrinho.set(idUsuario, cupcakes);
        return Promise.resolve();
    }

    static finalizarCompra(idUsuario: number): Promise<void> {
        this.mapCarrinho.set(idUsuario, []);

        const usuario = UsuarioDAO.mapUsuario.get(idUsuario);
        if(usuario) {
            usuario.qntPedidos++;
            UsuarioDAO.mapUsuario.set(idUsuario, usuario)
        }

        return Promise.resolve()
    }
}