class NegociacaoController {
	
	constructor() {
		CD.negociacoesView.update(CD.negociacaoListModel)
		Object.freeze(this)
	}
	
	apagarLista(evento) {
		evento.preventDefault()
		CD.negociacaoListModel.esvaziar()
		CD.negociacoesView.update(CD.negociacaoListModel)
		CD.mensagemModel.texto = "Lista esvaziada com sucesso!"
		CD.mensagemView.update(CD.mensagemModel)
	}
	
	adicionar(evento) {
		evento.preventDefault()
		CD.negociacaoListModel.adicionar(this._criarNegociacao())
		CD.negociacoesView.update(CD.negociacaoListModel)
		CD.mensagemModel.texto = "Negociação cadastrada com sucesso!"
		CD.mensagemView.update(CD.mensagemModel)
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