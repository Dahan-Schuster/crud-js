class NegociacaoController {
	
	constructor() {
		this.negociacaoListModel = new Proxy(new NegociacaoList(), new NegociacaoListHandler())
		this.mensagemModel = new Proxy(new Mensagem(), new MensagemHandler())
		Object.freeze(this)
	}
	
	apagarLista(evento) {
		evento.preventDefault()
		this.negociacaoListModel.esvaziar()
		this.mensagemModel.texto = "Lista esvaziada com sucesso!"
	}
	
	adicionar(evento) {
		evento.preventDefault()
		this.negociacaoListModel.adicionar(this._criarNegociacao())
		this.mensagemModel.texto = "Negociação cadastrada com sucesso!"
		this._limparFormulario()
	}
	
	_criarNegociacao() {
		return new Negociacao({
			data      : DateHelper.textoParaData(CD.inputData.value),
			quantidade: CD.inputQuantidade.value,
			valor     : CD.inputValor.value,
		})
	}
	
	_limparFormulario() {
		CD.formNegociacoes.reset()
		CD.inputData.focus()
	}
	
}