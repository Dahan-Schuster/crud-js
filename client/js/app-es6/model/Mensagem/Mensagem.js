export class Mensagem {

	constructor(texto = "") {
		this._texto = texto
		this._tipo = 'info'
	}
	
	get tipo() {
		return this._tipo
	}
	
	get texto() {
		return this._texto
	}
	
	erro(texto) {
		this._tipo = 'danger'
		this._texto = texto;
	}
	
	info(texto) {
		this._tipo = 'info'
		this._texto = texto
	}
	
	sucesso(texto) {
		this._tipo = 'success'
		this._texto = texto
	}
	
	aviso(texto) {
		this._tipo = 'warning'
		this._texto = texto
	}
}