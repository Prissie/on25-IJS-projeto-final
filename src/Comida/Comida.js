class Comida {
    id;
    nome;
    categoria;
    descricao;

    constructor(id, nome, categoria, descricao){
        if (!id || !nome || !categoria || !descricao) {
            throw new Error('Não é possível instanciar com valores indefinidos')
        } 
        else if (typeof id === 'number' && typeof nome === 'string' && typeof descricao === 'string') {
            this.id = id;
            this.nome = nome;
            this.categoria = categoria;
            this.descricao = descricao;            
        } else {
            throw new Error('Não foi possível criar uma instância de Cardapio');
        }
    }
    setNome(nome) {
        this.nome = nome;
    }
    setDescricao(descricao) {
        this.descricao = descricao;
    }
}
module.exports = { Comida };