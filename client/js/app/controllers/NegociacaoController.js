//NegociacaoController é o meu controller
class NegociacaoController {

    constructor() {
        let $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
    }

    adiciona(event) {
        
        event.preventDefault();

        let helper = new DateHelper();

        let negociacao = new Negociacao(
            helper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.valor
        );
        console.log("Negociação:\n" + negociacao.data);
    }
}