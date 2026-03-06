class Usuario:
    def __init__(self, nome, email):
        self.nome = nome
        self.email = email

    def exibir_perfil(self):
        print(f"\nUsuario: {self.nome} | Contato: {self.email}\n")

pessoa1 = Usuario("Jhean", "jhean@example.com")
pessoa2 = Usuario("Pedro", "pedro@example.com")

pessoa1.exibir_perfil()
pessoa2.exibir_perfil()