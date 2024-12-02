import { Application } from "express";
import { ICupcake } from "../../model";

export function InicioController(app: Application) {
    console.log('/favoritos');
    app.get('/favoritos', (req, res) => {
        const cupcakes: ICupcake[] = [
            { nome: 'Cupcake de Morango', valor: 10, quantidade: 1, imgUrl: 'http://localhost:3000/' + 'morango.webp' }, //ok
            { nome: 'Cupcake de Chocolate', valor: 12, quantidade: 1, imgUrl: 'http://localhost:3000/' + 'chocolate.webp' }, //ok
            { nome: 'Cupcake Red Velvet', valor: 15, quantidade: 1, imgUrl: 'http://localhost:3000/' + 'red-velvet.webp' }, //ok
            { nome: 'Cupcake de Limão', valor: 9, quantidade: 1, imgUrl: 'http://localhost:3000/' + 'limao.png' }, //ok 
            { nome: 'Cupcake de Baunilha', valor: 8, quantidade: 1, imgUrl: 'http://localhost:3000/' + 'baunilha.png' }, //ok
            { nome: 'Cupcake de Amora', valor: 14, quantidade: 1, imgUrl: 'http://localhost:3000/' + 'amora.png' }, //ok
            { nome: 'Cupcake de Caramelo', valor: 13, quantidade: 1, imgUrl: 'http://localhost:3000/' + 'caramelo.png' }, //ok
            { nome: 'Cupcake de Coco', valor: 11, quantidade: 1, imgUrl: 'http://localhost:3000/' + 'coco.png' },  //ok
            { nome: 'Cupcake de Pistache', valor: 16, quantidade: 1, imgUrl: 'http://localhost:3000/' + 'pistache.png' },  //ok 
            { nome: 'Cupcake de Menta com Chocolate', valor: 17, quantidade: 1, imgUrl: 'http://localhost:3000/' + 'menta.png' }
        ];

        res.json(cupcakes)
    })
}