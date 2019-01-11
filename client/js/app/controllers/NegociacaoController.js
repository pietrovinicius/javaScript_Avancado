//NegociacaoController é o meu controller
class NegociacaoController {

    constructor(){

        //capturando cada valor do formulario pelo id
        let $ = document.querySelector.bind(document);
        this.inputData = $('#data');
        this.inputQuantidade = $('#quantidade');
        this.inputValor = $('#valor');
    }

    adiciona(event) {
        //cancelar comportamento padrão do formulário
        event.preventDefault();        

        console.log(this.inputData.value);
        console.log(this.inputQuantidade.value);
        console.log(this.inputValor.value);
    }
}