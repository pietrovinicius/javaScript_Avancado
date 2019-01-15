class ListaNegociacoes{

    constructor(){

        this._negociacoes = [];
    }

    //meus métodos

 adiciona(negociacao){
     this._negociacoes.push(negociacao);
 }

 get negociacoes(){
    return this._negociacoes;
 }

}