# construir um termometro que avalie se a pessoa esta com febre ou se a temperatura dela esta muito baixa, ou se a pessoa esta com a temperatura normal.

# isso deve ser feito em uma classe rica

class Termometro:
    def __init__(self, temperatura):
        self.temperatura = temperatura

    
    def verificaTemperatura(self):
        if self.temperatura > 37.5:
            return f"""A temperatura corporal de está em {self.temperatura}°, indicando febre"""
        
        elif self.temperatura > 36.5 and self.temperatura <= 37.5:
            return f"""A temperatura corporal de está em {self.temperatura}°, tudo está normal."""
        
        else:
            return f"""A temperatura corporal de está em {self.temperatura}°. está muito baixa."""

class Pessoa:
    # metodo construtor
    def __init__(self, nome, idade, altura, temperatura):
        # atributos
        self.nome = nome
        self.idade = idade
        self.altura = altura
        self.temperatura = temperatura


    # método de apresentação
    def apresentar(self):
        return f"""
            olá, eu sou o {self.nome} e temho {self.altura}m de altura e {self.idade} anos de idade, e a temperatura corporal está em {self.temperatura}°
        """
    
    def verificaTemperatura(self):
        temperatura = Termometro(self.temperatura)
        return temperatura.verificaTemperatura()


        

Jhean = Pessoa("Jhean", 20, 1.70, 35)
print(Jhean.apresentar())
Jhean = Termometro(86)
print(Jhean.verificaTemperatura())