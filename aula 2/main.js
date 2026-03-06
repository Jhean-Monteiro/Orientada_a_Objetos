class Usuario {
    constructor(name, email, idade) {
        this.nome = name
        this.email = email
        this.idade = idade
    }

    exibirPerfil = () => {
        console.log(`Usuário: ${this.nome} | Idade: ${this.idade} | Contato: ${this.email}`);
    }

    aumentaIdade = () => {
        ++this.idade
    }
}

const pessoa1 = new Usuario("Jhean Monteiro", "Jhean@email.com", 21)
const pessoa2 = new Usuario("Pedro Monteiro", "Pedro@email.com", 25)
pessoa2.aumentaIdade()

pessoa1.exibirPerfil()
pessoa2.exibirPerfil()