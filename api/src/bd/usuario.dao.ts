import { IUsuario } from "../model";

export class UsuarioDAO {
    static mapUsuario = new Map<number, IUsuario>()

    static getInfo(idUsuario: number): Promise<IUsuario | undefined> {
        return Promise.resolve(this.mapUsuario.get(idUsuario));
    }

    static setUsuario(usuario: IUsuario): Promise<void> {
        this.mapUsuario.set(usuario.id, usuario);
        return Promise.resolve()
    }
}