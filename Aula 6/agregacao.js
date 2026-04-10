class Banco {
    constructor(nome) {
        
        this.list = []
    }

    adicionarCliente = (cliente) => {
        this.list.push(cliente)
        console.log(`cliente ${cliente.nome} adicionado com sucesso`)
    }

    exibirLista = () => {
        console.log(this.list)
    }
}

class Cliente {
    constructor(nome) {
        this.nome = nome
        
    }

}
const banco = new Banco()

const cliente = new Cliente('Diego Ramos')

const cliente2 = new Cliente('Jhean')
const testando2 = banco.adicionarCliente(cliente2)


const testando = banco.adicionarCliente(cliente)
banco.exibirLista()