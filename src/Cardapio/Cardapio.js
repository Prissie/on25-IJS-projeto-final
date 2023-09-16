const { Comida } = require('../Comida/Comida');

class Cardapio { 

    constructor() {
        this.itens = [];
    }

    addItens(item) {
        if (item instanceof Comida) {
          return this.itens.push(item);          
        }
      }

    apresentarCardapio(){
        Cardapio.itens.forEach(item => {
            console.log(item);
        });
        return Cardapio.itens;
    }
}
module.exports = { Cardapio };