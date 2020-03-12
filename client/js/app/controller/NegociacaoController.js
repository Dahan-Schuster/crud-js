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
			}, () => this.mensagemModel.info('Enviando negociação...'),
		)
	}
	
	importarNegociacoes(periodo = 'semana') {
		this._negociacaoAjax.importarNegociacoes(periodo, () => this._informarInicioImportacao())
		    .then(negociacoes => this._preencherListaComNegociacoesImportadas(negociacoes))
		    .catch(erro => this.mensagemModel.erro(erro))
	}
	
	importarTodasNegociacoes() {
		Promise.all([
			this._negociacaoAjax.importarNegociacoes('semana', () => this._informarInicioImportacao()),
			this._negociacaoAjax.importarNegociacoes('anterior'),
			this._negociacaoAjax.importarNegociacoes('retrasada'),
		]).then(negociacoes => {
			let negociacoesFlat = negociacoes.reduce(
				(negociacoesFlat, negociacoes) => negociacoesFlat.concat(negociacoes), []
			)
			this._preencherListaComNegociacoesImportadas(negociacoesFlat)
		}).catch(erro => this.mensagemModel.erro(erro))
	}
	
	_preencherListaComNegociacoesImportadas(negociacoes) {
		negociacoes.forEach(negociacao => {
			this.negociacaoListModel.adicionar(
				new Negociacao({...negociacao, data: new Date(negociacao.data)}),
			)
			this.mensagemModel.info("Negociações importadas com sucesso!")
		})
	}
	
	_informarInicioImportacao() {
		this.mensagemModel.info('Importanto negociações...')
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
	
	ordenarLista(campo) {
		this.negociacaoListModel.ordenarLista(campo)
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