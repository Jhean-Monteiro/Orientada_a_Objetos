// incompleto.
class Banco {
    constructor(nome, agencia, numConta, saldo, cpf) {
        this.nome = nome
        this.numConta = numConta
        this.agencia = agencia
        this.saldo = saldo
        this.cpf = cpf
    }

    depositar = () => {
        let pergunta = parseFloat(prompt("\nquanto deseja depositar? "))
        this.saldo = (this.saldo + pergunta)
        console.log(`o saldo atual é: ${this.saldo}`)
    }
    sacar = () => {
        let pergunta2 = parseFloat(prompt("\nquanto deseja sacar? "))
        this.saldo = (this.saldo - pergunta2)
        console.log(`o saldo atual é: ${this.saldo}`)
    }
    pix = () => {
        console.log("PIX realizado.")
    }
    criarConta = () => {
        conta = (`CONTA CRIADA! \n Nome: ${this.nome} \n CPF: ${this.cpf}`)
        console.log(conta)
    }
    excluirConta() {
        conta = (`Conta Excluída.`)
        console.log(conta)
    }

}

class User {
    constructor(usuario, senha) {
        this.usuario = usuario
        this.senha = senha
    }

    autenticar = (conta=Banco) => {
        
    }
}

teste = new Banco("Pedro", "Itaú", "100", 1500.00, 12345678997)
teste.depositar()
teste.criarConta()