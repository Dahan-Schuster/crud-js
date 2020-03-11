class NegociacaoController {
	
	constructor() {
		this.negociacaoListModel = new Proxy(new NegociacaoList(), new NegociacaoListHandler())
		this.mensagemModel = new Proxy(new Mensagem(), new MensagemHandler())
		this._negociacaoAjax = new NegociacaoAjax()
		Object.freeze(this)
	}
	
	enviarNegociacao(evento) {
		evento.preventDefault()
		let negociacao = JSON.stringify(this._criarNegociacao(true))
		this._negociacaoAjax.enviarDados(negociacao,
			(erro, resposta) => {
				if (erro) {
					this.mensagemModel.erro(erro)
					return
				}
				this.mensagemModel.sucesso('Negociação enviada com sucesso!')
			}, () => this.mensagemModel.info('Enviando negociação...')
		)
	}
	
	importarNegociacoes() {
		this._negociacaoAjax.importarNegociacoesDaSemana(
			(erro, negociacoes) => {
				if (erro) {
					this.mensagemModel.erro(erro)
					return
				}
				
				negociacoes.forEach(negociacao => {
					this.negociacaoListModel.adicionar(negociacao)
					this.mensagemModel.info("Negociações importadas com sucesso!")
				})
			}, () => this.mensagemModel.info('Importanto negociações...'),
		)
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
	
	_criarNegociacao(objetoLiteral = false) {
		let objeto = {
			data      : DateHelper.textoParaData(CD.inputData.value),
			quantidade: CD.inputQuantidade.value,
			valor     : CD.inputValor.value,
		}
		return objetoLiteral ? objeto : new Negociacao(objeto)
	}
	
	_limparFormulario() {
		CD.formNegociacoes.reset()
		CD.inputData.focus()
	}
}