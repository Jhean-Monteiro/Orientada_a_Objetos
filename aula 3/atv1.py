class Produto:
    def __init__(self, nome, preço, estoque):
        self.nome = nome
        self.preço = preço
        self.estoque = estoque

    def exibir_info(self):
        # print(f"{self.nome}: R${self.preço}, | {self.estoque} un.")
        return f"\n{self.nome}: R${self.preço}, | {self.estoque} un."


p = Produto("Café", 12.30, 20)
exibir = p.exibir_info()
print(exibir)
arroz = Produto("Arroz", 25.00, 5)
print(arroz.exibir_info())


class Pedido:
    def __init__(self):
        self.itens = []

    def adicionar_produto(self, produto:Produto):
        self.itens.append(produto.nome)
        return f"\nAdicionando {produto.nome}"
    
novo_pedido = Pedido()
pedido = novo_pedido.adicionar_produto(p)
print(pedido)

pedido2 = novo_pedido.adicionar_produto(arroz)
print(pedido2)