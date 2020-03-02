class View {
	
	constructor(elemento) {
		// Validar que o construtor não é da classe View
		// (uma classe filha, mesmo que não implemente um construtor
		// explicitamente, terá um construtor vazio)
		if (this.constructor === View) {
			throw new Error('Classe "View" não pode ser instanciada')
		}
		
		// Se o código não lançou nenhum erro até agora, então
		// a classe é uma herança de View e implementa os métodos
		// necessários. Logo podemos continuar :)
		
		this._elemento = elemento
	}
	
	_template() {
		throw new Error('A função "_template" deve ser implementada por classes View')
	}
	
	update(model) {
		this._elemento.innerHTML = this._template(model)
	}
	
}