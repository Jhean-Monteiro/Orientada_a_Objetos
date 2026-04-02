class Chave {}

class Carro {
    constructor(marca, ano, chave) {
        this.velocidade = 0
        this.marcha = 0
        this.marca = marca
        this.ano = ano
        this.ligado = false
        this.chaveDoCarro = chave
    }

    ligar(chaveUsada) {
        if (chaveUsada === this.chaveDoCarro) {
            this.ligado = true
            console.log("Carro LIGADO!")
        } else {
            console.log("Chave inválida!")
        }
    }

    desligar(chaveUsada) {
        if (chaveUsada === this.chaveDoCarro) {
            this.ligado = false
            this.velocidade = 0
            this.marcha = 0
            console.log("Carro DESLIGADO!")
        } else {
            console.log("Chave inválida!")
        }
    }

    acelerar(chaveUsada) {
        if (chaveUsada === this.chaveDoCarro && this.ligado) {
            this.velocidade += 10
            console.log("Acelerando... Velocidade: " + this.velocidade + " km/h")
        } else {
            console.log("Não pode acelerar")
        }
    }

    passarDeMarcha(chaveUsada) {
        if (chaveUsada === this.chaveDoCarro && this.ligado) {
            if (this.marcha < 5) {
                this.marcha++
                console.log("Marcha: " + this.marcha)
            }
        }
    }

    reduzirMarcha(chaveUsada) {
        if (chaveUsada === this.chaveDoCarro && this.ligado) {
            if (this.marcha > 0) {
                this.marcha--
                console.log("Marcha: " + this.marcha)
            }
        }
    }

    frear(chaveUsada) {
        if (chaveUsada === this.chaveDoCarro && this.ligado) {
            if (this.velocidade > 0) {
                this.velocidade -= 10
                if (this.velocidade < 0) this.velocidade = 0
                console.log("Freando... Velocidade: " + this.velocidade + " km/h")
            }
        }
    }

    mostrarEstado() {
        console.log(this.marca + " " + this.ano)
        console.log("Ligado: " + this.ligado)
        console.log("Velocidade: " + this.velocidade)
        console.log("Marcha: " + this.marcha)
        console.log("-------------------")
    }
}

class Pessoa {
    constructor(chave) {
        this.chave = chave
    }

    ligarCarro(carro) {
        carro.ligar(this.chave)
    }

    desligarCarro(carro) {
        carro.desligar(this.chave)
    }

    acelerarCarro(carro) {
        carro.acelerar(this.chave)
    }

    passarDeMarchaCarro(carro) {
        carro.passarDeMarcha(this.chave)
    }

    reduzirMarchaCarro(carro) {
        carro.reduzirMarcha(this.chave)
    }

    frearCarro(carro) {
        carro.frear(this.chave)
    }
}
// TESTE
const chaveOriginal = new Chave()
const meuCarro = new Carro("Fiat", 2022, chaveOriginal)
const eu = new Pessoa(chaveOriginal)

console.log("=== TESTE COM CHAVE CERTA ===")
eu.ligarCarro(meuCarro)
meuCarro.mostrarEstado()

eu.passarDeMarchaCarro(meuCarro)
eu.acelerarCarro(meuCarro)
eu.acelerarCarro(meuCarro)
meuCarro.mostrarEstado()

eu.frearCarro(meuCarro)
eu.reduzirMarchaCarro(meuCarro)
meuCarro.mostrarEstado()

eu.desligarCarro(meuCarro)

// teste chave errada
const chaveFalsa = new Chave()
const ladrao = new Pessoa(chaveFalsa)
console.log("\n=== TESTE COM CHAVE FALSA ===")
ladrao.acelerarCarro(meuCarro)
ladrao.ligarCarro(meuCarro)
