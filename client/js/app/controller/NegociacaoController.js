class NegociacaoController {
	
	constructor() {
		/**
		 * bind: informa que, ao passar o método para outro contexto, deve
		 * manter o objeto enviado por parâmetro como referência do 'this'
		 * Assim, sempre que $ for chamado e, dentro de si, this for
		 * usado, document será referenciado ao invés de $
		 * Ex.:
		 * const obj = { metodo() { console.log(this) } }
		 * const a   = obj.metodo
		 * const b   = obj.metodo.bind(obj)
		 * a()      # Window
		 * b()      # obj
		 */
		const $ = document.querySelector.bind(document)
		this._form = $('.form')
		this._inputQuantidade = $('#quantidade')
		this._inputData = $('#data')
		this._inputValor = $('#valor')
		this._negociacaoList = new NegociacaoList()
		this._negociacoesView = new NegociacoesView($('#negociacoes-view'))
		this._negociacoesView.update(this._negociacaoList)
		Object.freeze(this)
	}
	
	adiciona(evento) {
		evento.preventDefault()
		this._negociacaoList.adicionar(this._criarNegociacao())
		this._negociacoesView.update(this._negociacaoList)
		this._limparFormulario()
	}
	
	_criarNegociacao() {
		return new Negociacao({
			data      : DateHelper.textoParaData(this._inputData.value),
			quantidade: this._inputQuantidade.value,
			valor     : this._inputValor.value,
		})
	}
	
	_limparFormulario() {
		this._form.reset()
		this._inputData.focus()
	}
	
}