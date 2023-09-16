const { Pedido } = require('../Pedido/Pedido');

class Comanda extends Pedido {
    #cpf_Cnpj;

    constructor(pedido, cpf_Cnpj){
        super(pedido, pedido.quantidade, pedido.preco);
        this.#cpf_Cnpj = cpf_Cnpj;
    }

    setCpf_Cnpj(cpf_Cnpj) {
        this.#cpf_Cnpj = cpf_Cnpj;
    }

    getCpf_Cnpj() {
        return this.#cpf_Cnpj;
    }

    gerarNota(quantidade, preco) { 
        return super.calcularPedido(quantidade, preco);      
    }
}
module.exports = { Comanda };