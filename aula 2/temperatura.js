class Termometro {
    constructor(temperatura) {
        this.temperatura = temperatura
    }

    verificar_estado() {
        if (this.temperatura < 35) {return "Baixa"}
        else if (this.temperatura >= 37.5) {return "Alta"}
        else {return "Normal"}
    }
}

class Pessoa {
    constructor(nome, idade, altura, temperatura) {
        this.nome = nome
        this.idade = idade
        this.altura = altura
        this.temperatura = temperatura
    }

    apresentar = () => {
        return `Meu nome é ${this.nome}, tenho ${this.idade} anos, ${this.altura}m de altura, e minha temperatura esta ${this.chamaTermometro()}`
    }

    chamaTermometro = (temperatura) => {
        temperatura = new Termometro(this.temperatura)
        return temperatura.verificar_estado()
    }
}

const pessoa = new Pessoa("Jhean", 20, 1.70, 35)
teste = pessoa.apresentar()
console.log(teste)