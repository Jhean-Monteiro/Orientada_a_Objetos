class Porta {
    constructor(chave){
        this.chave = chave
    }

    abertaOuFechada=(chave)=>{
        if (chave === true) {
            console.log("a porta está aberta (chave inserida)")
        }
        else {
            console.log("a porta está fechada (chave não inserida)")
        }
    }
}

class Chave {
    constructor(tipo){
        this.tipo = tipo
    }
}

class Pessoa {
    constructor(nome){
        this.nome = nome
    }

    pegarChave = () => {                
        console.log(`${this.nome} pegou a chave.`);
        return new Chave("prata");
    }                
    
    abrirPorta = (chave) => {                
        const porta = new Porta(chave);
        porta.abertaOuFechada(chave ? true : false);                
    } 
}

const pessoa = new Pessoa("pedrinho")
const chaveDaPessoa = pessoa.pegarChave();                
pessoa.abrirPorta(chaveDaPessoa);