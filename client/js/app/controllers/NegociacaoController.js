//NegociacaoController é o meu controller
class NegociacaoController {

    adiciona(event) {
        //cancelar comportamento padrão do formulário
        event.preventDefault();

        //capturando cada valor do formulario pelo id
        let $ = document.querySelector.bind(document);
        let inputData = $('#data');
        let inputQuantidade = $('#quantidade');
        let inputValor = $('#valor');

        console.log(inputData.value);
        console.log(inputQuantidade.value);
        console.log(inputValor.value);
    }
}