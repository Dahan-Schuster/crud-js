class View {
	
	constructor(elemento) {
		// Para simular uma classe abstrata em JS, algumas medidas podem ser tomadas
		
		// Primeiro, validar que o construtor não é da classe View
		// (uma classe filha, mesmo que não implemente um construtor
		// explicitamente, terá um construtor vazio)
		if (this.constructor === View) {
			throw new Error('Classe "View" não pode ser instanciada')
		}
		
		// Segundo, validar que a classe filha implementa os métodos
		// exigidos para uma herança de View ─ no fundo, este é o
		// objetivo de uma classe abstrata
		if (this._template === undefined) {
			throw new Error('A função "_template" deve ser implementada por classes View')
		}
		
		// Se o código não lançou nenhum erro até agora, então
		// a classe é uma herança de View e implementa os métodos
		// necessários. Logo podemos continuar :)
		
		this._elemento = elemento
	}
	
	update(model) {
		this._elemento.innerHTML = this._template(model)
	}
	
}