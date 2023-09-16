const { Pedido } = require('../Pedido/Pedido');
const { Comida } = require('../Comida/Comida');
const enumCategoria = require('../Enum/enum');

let pedido;
let pratoFeito;

describe('Modulo do Pedido', () => {
    beforeAll(() => {
        pratoFeito = new Comida(1, 'Feijão com arroz e bife', enumCategoria.categoria.Refeicao, 'Feijão com arroz, bife e tomate');
        pedido = new Pedido(pratoFeito, 1, 15.00);
    });

    test('A pagar', () => {
        expect(pedido.calcularPedido()).toBe(15.00);
    });

    test('Instância do pedido', () => {
        expect(new Pedido(pratoFeito, 1, 15.00)).toBeInstanceOf(Pedido);
    });
});