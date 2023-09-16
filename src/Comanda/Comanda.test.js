const { Comanda } = require('../Comanda/Comanda');
const { Pedido } = require('../Pedido/Pedido');
const { Comida } = require('../Comida/Comida');
const enumCategoria = require('../Enum/enum');

let suco;
let pedido;
let pedido2;
let comanda;
let comanda2;

describe('Modulo da Comanda', () => {
    
    beforeAll(() => {
        suco = new Comida(1, 'Suco de laranja', enumCategoria.categoria.Bebidas, 'Suco de laranja natural');
        pedido = new Pedido(suco, 3, 8.00);
        pedido2 = new Pedido(suco, 0, 8.00);
        comanda = new Comanda(pedido, '0123456789');
        comanda2 = new Comanda(pedido2, '6523456789');
    });

    test('A pagar', () => {
        expect(pedido.calcularPedido()).toBe(24.00);
    });     

    test('Gerar nota', () => {
        expect(comanda.gerarNota()).toBe(24.00);
    });

    test('Instância da Comanda', () => {
        expect(new Comanda(pedido, '0123456789')).toBeInstanceOf(Comanda);
    });

    test('Instância da Comanda', () => {
        comanda.setCpf_Cnpj('8123456789');
        expect(comanda.getCpf_Cnpj()).toBe('8123456789');
    });

});