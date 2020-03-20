export class Negociacao {
	
	/**
	 * Negociação constructor
	 *
	 * @param data
	 * @param quantidade
	 * @param valor
	 */
	constructor({data, quantidade, valor}) {
		this._data =  new Date(data ? data.getTime() : null) // instancia uma nova data, previnindo alteração da proprieadade por referência
		this._quantidade = quantidade || 0
		this._valor = parseFloat(valor) || 0
		Object.freeze(this)
	}
	
	get data() {
		return new Date(this._data.getTime()) // instancia uma nova data e retorna, previnindo alterações na propriedades do objeto Data da Negociação
	}
	
	get quantidade() {
		return this._quantidade
	}
	
	get valor() {
		return this._valor
	}
	
	get volume() {
		return this._quantidade * this._valor
	}
	
	equals(outraNegociacao) {
		return JSON.stringify(this) === JSON.stringify(outraNegociacao)
	}
	
}