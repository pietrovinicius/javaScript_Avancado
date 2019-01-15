//NegociacaoController é o meu controller
class NegociacaoController {

    constructor() {

        //capturando cada valor do formulario pelo id
        let $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        this._listaNegociacoes = new ListaNegociacoes();
    }

    adiciona(event) {
        //cancelar comportamento padrão do formulário
        event.preventDefault();


        this._listaNegociacoes.adiciona(this._criaNegociacao());
        //chamando o limpa formulário
        this._limpaFormulario();
        console.log(this._listaNegociacoes.negociacoes);
    }

    //cria negociacao
    _criaNegociacao() {
        return new Negociacao(
            DateHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value);
    }

    //limpar o formulário
    _limpaFormulario() {

        this._inputData.value = '';
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0.0;

        this._inputData.focus();
    }

}