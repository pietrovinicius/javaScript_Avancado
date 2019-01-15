//NegociacaoController é o meu controller
class NegociacaoController {

    constructor() {

        //capturando cada valor do formulario pelo id
        let $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        this._listaNegociacoes = new ListaNegociacoes();
        
        this._negociacoesView = new NegociacoesView($('#negociacoesView'));
        this._negociacoesView.update(this._listaNegociacoes);
    }

    adiciona(event) {
        //cancelar comportamento padrão do formulário
        event.preventDefault();

        this._listaNegociacoes.adiciona(this._criaNegociacao());
        //renderizar novamente a tabela
        this._negociacoesView.update(this._listaNegociacoes);
        //chamando o limpa formulário
        this._limpaFormulario();
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