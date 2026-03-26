class User:
    def __init__(self, user, password):
        self.user = user
        self.password = password
        self.tentativas_erradas = 0
    
    def autenticar(self, name, psw):
        return self.user == name and self.password == psw
    
    def alterar_senha(self, senha_atual, nova_senha):
        if self.password == senha_atual:
            self.password = nova_senha
            print("Senha alterada!")
            return True
        else:
            print("Senha atual incorreta")
            return False

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
        self.bloqueada = False
        self.historico = []
        
        if not self._validar_cpf(cpf):
            print("CPF inválido!")
            return
        
        Banco.contasCadastradas.append(self)
    
    def _validar_cpf(self, cpf):
        cpf_limpo = cpf.replace(".", "").replace("-", "")
        return len(cpf_limpo) == 11 and cpf_limpo.isdigit()
    
    def exibirSaldo(self):
        return f"R$ {self.saldo:.2f}"
    
    def verificarContaAtiva(self):
        if self.bloqueada:
            print("Conta bloqueada por excesso de tentativas")
            return False
        
        if not self.ativa:
            print("Conta Encerrada")
            return False
        
        return True
    
    def autenticar(self, user, psw):
        if not self.verificarContaAtiva():
            return False
        
        teste = User(user, psw)
        if not teste.autenticar(user, psw):
            self.user.tentativas_erradas += 1
            print("Usuario ou senha incorretos")
            
            if self.user.tentativas_erradas >= 3:
                self.bloqueada = True
                print("CONTA BLOQUEADA - muitas tentativas erradas")
            
            return False
        
        self.user.tentativas_erradas = 0
        print("usuario e senha corretos")
        return True
    
    def depositar(self, valor, usuario, senha):
        if not self.autenticar(usuario, senha):
            return
        
        if valor <= 0:
            print("valor inválido")
            return
        
        self.saldo += valor
        self.historico.append(f"Depósito: +R$ {valor:.2f}")
        print('depositado', valor, 'R$')
    
    def ver_saldo(self, usuario, senha):
        if not self.autenticar(usuario, senha):
            return
        
        print(f"Saldo atual: {self.exibirSaldo()}")
    
    def extrato(self, usuario, senha):
        if not self.autenticar(usuario, senha):
            return
        
        print("\n=== EXTRATO ===")
        if len(self.historico) == 0:
            print("Nenhuma movimentação")
        else:
            for movimento in self.historico:
                print(movimento)
        print(f"Saldo: {self.exibirSaldo()}")
        print("===============\n")

class ContaCorrente(Banco):
    def __init__(self, nome, agencia, numeroconta, saldo, cpf, user, limite_cheque=500):
        super().__init__(nome, agencia, numeroconta, saldo, cpf, user)
        self.limite_cheque = limite_cheque
    
    def sacar(self, valor, usuario, senha):
        if not self.autenticar(usuario, senha):
            return
        
        if valor <= 0:
            print("valor inválido")
            return
        
        limite_total = self.saldo + self.limite_cheque
        if valor > limite_total:
            print("Saldo insuficiente (mesmo com cheque especial)")
            return
        
        self.saldo -= valor
        self.historico.append(f"Saque: -R$ {valor:.2f}")
        print(f'sacado R$ {valor:.2f}')

class ContaPoupanca(Banco):
    def __init__(self, nome, agencia, numeroconta, saldo, cpf, user):
        super().__init__(nome, agencia, numeroconta, saldo, cpf, user)
        self.rendimento_mes = 0.005
    
    def render(self, usuario, senha):
        if not self.autenticar(usuario, senha):
            return
        
        ganho = self.saldo * self.rendimento_mes
        self.saldo += ganho
        self.historico.append(f"Rendimento: +R$ {ganho:.2f}")
        print(f"Rendeu R$ {ganho:.2f}")

class Agencia:
    def __init__(self, codigo, cnpj, endereco):
        self.codigo = codigo
        self.cnpj = cnpj
        self.endereco = endereco
        self.contas = []
    
    def adicionar_conta(self, conta):
        self.contas.append(conta)
        print(f"Conta {conta.numeroconta} adicionada à agência {self.codigo}")
    
    def listar_contas(self):
        print(f"\n=== Contas da Agência {self.codigo} ===")
        for c in self.contas:
            status = "Ativa" if c.ativa and not c.bloqueada else "Inativa/Bloqueada"
            print(f"{c.nome} - Conta {c.numeroconta} - {status}")

print("classe banco definida com sucesso")

# Testando
user_ana = User("ana", "admin123")
conta_ana = ContaCorrente("Ana", "0001", "10001", 400.00, "111.111.111-11", user_ana)
conta_ana.depositar(123, "ana", "admin123")
conta_ana.ver_saldo("ana", "admin123")
conta_ana.extrato("ana", "admin123")

# Testando poupança
user_joao = User("joao", "senha456")
poupanca_joao = ContaPoupanca("João", "0001", "10002", 1000.00, "222.222.222-22", user_joao)
poupanca_joao.render("joao", "senha456")

# Testando agência
agencia_central = Agencia("0001", "12.345.678/0001-90", "Rua Principal, 100")
agencia_central.adicionar_conta(conta_ana)
agencia_central.adicionar_conta(poupanca_joao)
agencia_central.listar_contas()
