variavel = input('Digite um numero: ')

# if int(variavel) >= 25:
#         print(f"O numero {variavel} é maior que 25")

# else:
#         print(f"o numero {variavel} é menor")



# classe de serviço
class TomadaDeDecisao:
    def tomadaDeDecisao(variavel):
       if int(variavel) >= 25:
         print(f"O numero {variavel} é maior que 25")

       else:
         print(f"o numero {variavel} é menor")


TomadaDeDecisao.tomadaDeDecisao(variavel)


# 1a classe rica
class Pessoa:
    # metodo construtor
    def __init__(self, nome, idade, altura):
        # atributos
        self.nome = nome
        self.idade = idade
        self.altura = altura


    # método de apresentação
    def apresentar(self):
        return f"""
            olá, eu sou o {self.nome} e temho {self.altura}m de altura e {self.idade} anos de idade
        """
    
zedamanga = Pessoa("zé da manga", 20, 1.70)
Jhean = Pessoa("Jhean Monteiro da Silva", 21, 1.70)
joao = Pessoa("João", 30, 2)

print(zedamanga.apresentar())
print(Jhean.apresentar())
print(joao.apresentar())




class Termometro:
    def __init__(self, nome, temperatura):
        self.nome = nome
        self.temperatura = temperatura

    
    def verificaTemperatura(self):
        if self.temperatura > 37.5:
            return f"""A temperatura corporal de {self.nome} está em {self.temperatura}°, indicando febre"""
        
        elif self.temperatura > 36.5 and self.temperatura <= 37.5:
            return f"""A temperatura corporal de {self.nome} está em {self.temperatura}°, tudo está normal."""
        
        else:
            return f"""A temperatura corporal de {self.nome} está em {self.temperatura}°. está muito baixa."""
        
Jhean = Termometro("Jhean", 38)
Pedro = Termometro("Pedro", 30)