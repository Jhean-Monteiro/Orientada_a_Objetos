class Historico {
    constructor() {
        this.movimentos = []
    }
    
    adicionarMovimento = (descricao) => {
        console.log(`O valor definido e inserido é: ${descricao}`)
        this.movimentos.push(descricao)
        console.log(this.movimentos)
    }
}

class Conta {
    constructor(numero, titular) {
        this.numero = numero
        this.titular = titular
        this.historico = new Historico()
    }
    
    depositarValor = (valor) => {
        console.log(`Valor depositado`)
        this.historico.adicionarMovimento(valor)
        console.log(`O valor é: ${this.historico.movimentos}`)
    }
}

const conta = new Conta(123456, 'Zé da Manga')
conta.depositarValor(100)