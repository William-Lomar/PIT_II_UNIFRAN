import { Application } from "express";
import { IOpcao } from "../../model";

export function OpcoesController(app: Application) {
    console.log('/opcoes');
    app.get('/opcoes', (req, res) => {
        const opcoes: IOpcao[] = [
            // Massas
            { nome: 'Baunilha', valor: 5, tipo: 'massa', selecionada: false },
            { nome: 'Chocolate', valor: 6, tipo: 'massa', selecionada: false },
            { nome: 'Red Velvet', valor: 7, tipo: 'massa', selecionada: false },
            { nome: 'Laranja', valor: 5, tipo: 'massa', selecionada: false },
            { nome: 'Cenoura', valor: 6, tipo: 'massa', selecionada: false },
        
            // Recheios
            { nome: 'Doce de Leite', valor: 4, tipo: 'recheio', selecionada: false },
            { nome: 'Chocolate', valor: 5, tipo: 'recheio', selecionada: false },
            { nome: 'Creme de Limão', valor: 4, tipo: 'recheio', selecionada: false },
            { nome: 'Frutas Vermelhas', valor: 6, tipo: 'recheio', selecionada: false },
            { nome: 'Brigadeiro', valor: 5, tipo: 'recheio', selecionada: false },
        
            // Coberturas
            { nome: 'Ganache de Chocolate', valor: 3, tipo: 'cobertura', selecionada: false },
            { nome: 'Chantilly', valor: 2, tipo: 'cobertura', selecionada: false },
            { nome: 'Glacê Real', valor: 3, tipo: 'cobertura', selecionada: false },
            { nome: 'Buttercream', valor: 4, tipo: 'cobertura', selecionada: false },
            { nome: 'Caramelo Salgado', valor: 5, tipo: 'cobertura', selecionada: false }
        ];
        
        res.json(opcoes)
    })
}