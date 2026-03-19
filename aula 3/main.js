class User {
  // classe user para autenticação
  constructor(usuario, senha) {
    this.usuario = usuario;
    this.senha = senha;
  }

  // metodo de autenticação
  autenticar = (usuarioInformado, senhaInformada) => {
    return this.usuario === usuarioInformado && this.senha === senhaInformada;
  };
}

class Banco {
  constructor(nome, agencia, numeroDaConta, saldoInicial = 0, cpf, usuario) {
    this.nome = nome;
    this.agencia = agencia;
    this.numeroDaConta = numeroDaConta;
    this.saldo = saldoInicial;
    this.cpf = cpf;
    this.usuario = usuario; // obj user associado
    this.autenticado = false;
  }

  // método de login
  login = (usuario, senha) => {
    if (this.usuario.autenticar(usuario, senha)) {
      this.autenticado = true;
      console.log(`Login realizado com sucesso! Bem-vindo ${this.nome}.`);
      return true;
    } else {
      console.log("X Usuario ou senha inválidos! X");
      return false;
    }
  };

  // método auxiliar
  verificarAutenticacao = () => {
    if (!this.autenticado) {
      console.log("X Operação Bloqueada! Você precisa fazer login primeiro.");
      return false;
    }

    return true;
  };

  // Métodos da conta que exigem autenticação.

  depositar = (valor) => {
    if (!this.verificarAutenticacao()) return;

    if (valor > 0) {
      this.saldo += valor;
      console.log(`Depósito de R$ ${valor.toFixed(2)} realizado com sucesso!`);
      console.log(`Saldo atual: R$ ${this.saldo.toFixed(2)}`);
    } else {
      console.log("X valor de depósito invalido");
    }
  };
  sacar = (valor) => {
    if (!this.verificarAutenticacao()) return;

    if (valor > 0 && valor <= this.saldo) {
      this.saldo -= valor;
      console.log(`Saque de RS ${valor.toFixed(2)} realizado com sucesso!`);
      console.log(`Saldo atual: R$ ${this.saldo.toFixed(2)}`);
    } else {
      console.log("Saldo insuficiente ou valor inválido para saque.");
    }
  };

  // PIX (transfere para outra conta)

  pix = (contaDestino, valor) => {
    i
