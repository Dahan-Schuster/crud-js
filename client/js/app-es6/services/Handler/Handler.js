class Handler {
	
	static construtor = 'constructor'
	
	constructor(...propriedadesRastreadas) {
		this._propriedadesRastreadas = propriedadesRastreadas
		if (this._isRastreado(Handler.construtor)) {
			this._interceptarConstrutor()
		}
		Object.freeze(this)
	}
	
	_interceptarConstrutor() {
		throw new MetodoAbstradoError(
			'_interceptarConstrutor',
			'Interceptação de construtor deve ser implementada por uma classe filha'
		)
	}
	
	get propriedadesRastreadas() {
		return new Array(...this._propriedadesRastreadas);
	}
	
	_isRastreado(propriedade) {
		return this._propriedadesRastreadas.includes(propriedade)
	}
	
	static _isMetodo(model, propriedade) {
		return typeof (model[propriedade] === typeof Function)
	}
	
	set(model, propriedade, valor) {
		if (this._isRastreado(propriedade)) {
			this._interceptarSetPropriedade(model, propriedade, valor)
		}
		return true
	}
	
	get(model, propriedade) {
		let self = this
		if (this._isRastreado(propriedade)) {
			if (Handler._isMetodo(model, propriedade)) {
				return function () {
					self._interceptarMetodo(model, propriedade, arguments)
				}
			}
			
			return this._interceptarGetPropriedade(model, propriedade)
		}
		
		return model[propriedade]
		
	}
	
	_interceptarMetodo(model, propriedade, argumentos) {
		model[propriedade](...argumentos)
	}
	
	_interceptarSetPropriedade(model, propriedade, valor) {
		model[propriedade] = valor
	}
	
	_interceptarGetPropriedade(model, propriedade) {
		return model[propriedade]
	}
	
}