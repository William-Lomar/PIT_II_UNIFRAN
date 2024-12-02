import { Application } from "express";
import { ICupcake } from "../../model";
import { CarrinhoDAO } from "../../bd/carrinho.dao";

export function CarrinhoController(app: Application) {
    console.log('/carrinho - Post');
    app.post('/carrinho', (req, res) => {
        const cupcake = req.body.cupcake as ICupcake;
        const idUsuario = Number(req.body.idUsuario);

        CarrinhoDAO.adicionar(idUsuario, cupcake);
        res.json(true);
    })

    console.log('/carrinho - Get');
    app.get('/carrinho', async (req, res) => {
        const idUsuario = Number(req.query.idUsuario);
        res.json(await CarrinhoDAO.listar(idUsuario));
    })

    console.log('/carrinho/comprar - Post');
    app.post('/carrinho/comprar', async (req, res) => {
        const idUsuario = Number(req.body.idUsuario);
        await CarrinhoDAO.finalizarCompra(idUsuario);
        res.json(true);
    })
}