class User:
    def __init__(self, user, password):
        self.user = user
        self.password = password
    
    def autenticar(self, name, psw):
        return self.user == name and self.password == psw
    
# u = User("Ana", "admin123")
# print(u.autenticar("Ana", "admin123"))
# print(u.autenticar("Ana", "senhaErrada"))


class Banco:
    contasCadastradas = []
    def __init__(self, nome, agencia, numeroconta, saldo, cpf, user):
        self.nome = nome
        self.agencia = agencia
        self.numeroconta = numeroconta
        self.saldo = saldo
        self.cpf = cpf
        self.user = user
        self.ativa = True

        Banco.contasCadastradas.append(self)

    def exibirSaldo(self):
        return f"R$ {self.saldo:.2f}"
    
    def verificarContaAtiva(self):
        if not self.ativa:
            print("Conta Encerrada")
            return False
        
        return True
    
    def autenticar(self, user, psw):
        if not self.verificarContaAtiva():
            return False
        
        teste = User(user, psw)
        if not teste.autenticar(user, psw):
            print("Usuario ou senha incorretos")
            return False
        
        print("usuario e senha corretos")
        return True
    
    def depositar(self, valor, usuario, senha):
        if not self.autenticar(usuario, senha):
            return
        
        if valor <= 0:
            print("valor inválido")
            return
        
        self.saldo += valor
        print('depositado', valor, 'R$')


    
print("classe banco definida com sucesso")

user_ana = User("ana", "admin123")
conta_ana = Banco("Ana", "0001", "10001", 400.00, "111.111.111-11", "testee")

conta_ana.depositar(123, "ana", "senha823")