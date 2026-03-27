class Animal {
    constructor(nome, raça, idade){
        this.nome = nome;
        this.raça = raça;
        this.idade = idade;
        if(this.constructor === Animal) {
            throw new Error("Classe Abstrata: Não pode ser instanciada")
        }
    }

    Ruido = () => {
        
    }
}

class Cachorro extends Animal {
    Ruido = () => {
        console.log(`${this.nome} está latindo`)
    }
}

class Gato extends Animal {
    Ruido = () => {
        console.log(`${this.nome} está miando`)
    }
}

class Vaca extends Animal {
    Ruido = () => {
        console.log(`${this.nome} está mugindo`)
    }
}

const cachorro = new Cachorro("bob", "vira-lata", 12)
cachorro.Ruido()

const gato = new Gato("flash", "sei la", 2)
gato.Ruido()

const vaca = new Vaca("mimosa", "não sei", null)
vaca.Ruido()