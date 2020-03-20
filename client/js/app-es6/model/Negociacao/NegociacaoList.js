import {Negociacao} from "./Negociacao.js"

export class NegociacaoList{
	
	constructor() {
		this._negociacoes = []
		this.ordenarPor = '';
		this.ordenarAsc = true
	}
	
	adicionar(negociacao) {
		if (!(negociacao instanceof Negociacao)) throw new Error('Apenas instâncias de Negociacao são permitidas')
		this._negociacoes.push(negociacao)
	}
	
	get negociacoes(){
		return new Array(...this._negociacoes);
	}
	
	esvaziar() {
		this._negociacoes = [ ];
	}
	
	ordenarLista(campo) {
		this.ordenarAsc = this.ordenarPor === campo ? !this.ordenarAsc : true
		this.ordenarPor = campo
		this._negociacoes.sort((neg1, neg2) =>
			this.ordenarAsc ? neg1[campo] - neg2[campo] : neg2[campo] - neg1[campo])
	}
	
	getVolumeTotal = () =>
		this._negociacoes
		    .reduce((total, negociacao) => (total + negociacao.volume), 0)
		    .toFixed(2)
	
}
