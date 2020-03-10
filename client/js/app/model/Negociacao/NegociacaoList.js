class NegociacaoList{
	
	constructor() {
		this._negociacoes = []
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
	
	getVolumeTotal = () =>
		this._negociacoes
		    .reduce((total, negociacao) => (total + negociacao.volume), 0)
		    .toFixed(2)
	
	
}