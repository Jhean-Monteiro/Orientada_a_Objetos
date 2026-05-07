class ContaBase {
    constructor(saldo) {
        this.saldo = saldo;
    }
}

class ContaCorrente extends ContaBase {

    sacar = (valor) => {
        try {
            if (this.saldo <= valor) {
                throw new RangeError('CRASH.');
            } else if (this.saldo > valor && valor == NaN)  {
                this.saldo =- valor;
                console.log(`${valor} sacado com sucesso. | Saldo Atual: ${this.saldo}`)
            }

        } catch (err) {
            console.error(err);
        }
    }
}
const user = new ContaCorrente(1000);

console.log(user.saldo)
user.sacar(2000)