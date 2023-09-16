const { Cardapio } = require('../Cardapio/Cardapio');
const { Comida } = require('../Comida/Comida');
const enumCategoria = require('../Enum/enum');

let cardapio;
let churros;

describe('Comidas', () => {   

    beforeAll(() => {
        cardapio = new Cardapio();
        churros = new Comida(1, 'Churros', enumCategoria.categoria.Sobremesas, 'Churros com recheio doce de leite');               
    });

    test('Não deve criar a instância de Comida se não passar os parâmetros', () => {
        expect(() => new Comida()).toThrow('Não é possível instanciar com valores indefinidos');
    });

    test('Não deve criar a instância de Comida se os parâmetros passados não forem do tipo esperado', () => {
        expect(() => new Comida('1', 7, 2, 'suco')).toThrow('Não foi possível criar uma instância de Cardapio');
    });

    test('Verifica se a instância de Comida é feita corretamente', () => {
        expect(churros instanceof Comida).toBe(true);
    });

    test('Mostra que não adiciona o item se não for instância de Comida', () => {
        const xbacon = 'x-bacon';
        cardapio.addItens(xbacon);
        expect(xbacon instanceof Comida).toBe(false); 
    });

    test('Verifica se o nome da sobremesa foi trocado', () => {
        churros.setNome('Churro Doce de leite');
        expect(churros.nome).toBe('Churro Doce de leite');
    });

    test('Verifica se a descrição da sobremesa foi trocada', () => {
        let descricao = 'Churros com recheio e cobertura de doce de leite';
        churros.setDescricao(descricao);
        expect(churros.descricao).toBe(descricao);
    });

});