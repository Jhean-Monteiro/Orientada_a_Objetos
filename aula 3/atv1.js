class Produto {
    constructor(nome, preço, estoque) {
        this.nome = nome
        this.preço = preço
        this.estoque = estoque
    }

    exibirInfo() {
        return `\n${this.nome}: R$${this.preço} | ${this.estoque}`
    }
}

class Pedido {
    constructor() {
        this.itens = []
    }

    realizarPedido(itens, produto=Produto) {
        this.itens.push(produto.nome)
        return `\nAdicionando ${produto.nome}`
    }
}

const arroz = new Produto("Arroz", 25.00, 5)
console.log(arroz.exibirInfo())

pedido = new Pedido()
console.log(pedido.realizarPedido(arroz))