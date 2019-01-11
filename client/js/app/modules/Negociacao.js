//NegociacaoController é o meu model
class Negociacao {
    //no contructor estão as definições dos atributos
    constructor(data, quantidade, valor) {
        //essas propriedades só podem ser acessadas pelos metodos da classe
        this._data = new Date(data.getTime());
        this._quantidade = quantidade;
        this._valor = valor;
        //congelando a instancia para evitar alterações
        Object.freeze(this);
    }

    //métodos desse objeto
    get volume() {
        return this._quantidade * this._valor;
    }
    //criacao de uma nova data baseada na data da negociação
    get data() {
        return new Date(this._data.getTime());
    }

    get quantidade() {
        return this._quantidade;
    }

    get valor() {
        return this._valor;
    }
}