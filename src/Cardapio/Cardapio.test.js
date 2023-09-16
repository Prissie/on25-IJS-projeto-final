const { Cardapio } = require('../Cardapio/Cardapio');
const { Comida } = require('../Comida/Comida');
const enumCategoria = require('../Enum/enum');

let cardapio;
let lanche;

describe('Cardápio', () => {  

    beforeAll(() => {
        cardapio = new Cardapio();
        xsalada = new Comida(1, 'X-Salada', enumCategoria.categoria.Lanches, 'X-Salada com carne especial, tomate, alface e molho da casa'); 
    });

    test('Instância do cardápio', () => {
        cardapio = new Cardapio();
        expect(cardapio instanceof Cardapio).toBeTruthy();
    });   

    test('Comida é adicionada ao cardápio', () => {
        cardapio.addItens(xsalada);
        expect(cardapio.itens[0].nome).toBe('X-Salada');
    }); 
    
});