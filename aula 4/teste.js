const array = new Array(1, 2, 3, 4, 5, 6, 7, 8)
console.log(array)

const object = new Object({
  nome: "Jhean",
  sobrenome: "Monteiro",
  idade: 21,
  funcao: () => {
    console.log("testando a funcao")
  }
})
console.log(object)

const nome = new String('Jhean')
const sobrenome = new String(' monteiro')
console.log(nome+sobrenome)
object.funcao()