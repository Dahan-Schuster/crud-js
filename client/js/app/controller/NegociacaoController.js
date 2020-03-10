class NegociacaoController {
	
	constructor() {
		this.negociacaoListModel = new Proxy(new NegociacaoList(), new NegociacaoListHandler())
		this.mensagemModel = new Proxy(new Mensagem(), new MensagemHandler())
		Object.freeze(this)
	}
	
	importarNegociacoes() {
		let negociacaoAjax = new NegociacaoAjax()
		negociacaoAjax.importarNegociacoesDaSemana((erro, negociacoes) => {
			if (erro) {
				this.mensagemModel.erro(erro)
				return
			}
			
			negociacoes.forEach(negociacao => {
				this.negociacaoListModel.adicionar(negociacao)
				this.mensagemModel.info("Negociações importadas com sucesso!")
			})
		})
	}
	
	apagarLista(evento) {
		evento.preventDefault()
		this.negociacaoListModel.esvaziar()
		this.mensagemModel.aviso("Lista esvaziada com sucesso!")
	}
	
	adicionar(evento) {
		evento.preventDefault()
		this.negociacaoListModel.adicionar(this._criarNegociacao())
		this.mensagemModel.sucesso("Negociação cadastrada com sucesso!")
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