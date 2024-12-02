export interface ICupcake {
    id?: number,
    nome: string,
    valor: number,
    descricao?: string,
    quantidade: number,
    imgUrl?: string
}

export interface IUsuario {
    id: number,
    nome: string,
    email: string,
    endereco: string,
    qntPedidos: number
}

export interface IOpcao {
    nome: string,
    valor: number,
    tipo: 'massa' | 'recheio' | 'cobertura',
    selecionada: boolean
}
