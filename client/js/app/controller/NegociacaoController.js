/**
 * Classe NegociacaoController
 * Responsável por intermediar operações envolvendo
 * a tela de negociações e a classe Negociacao
 */
class NegociacaoController {
	
	/**
	 * Inicaliza o controlador de negociações
	 */
	constructor() {
		this.negociacaoListModel = new Proxy(new NegociacaoList(), new NegociacaoListHandler())
		this.mensagemModel = new Proxy(new Mensagem(), new MensagemHandler())
		this._negociacaoAjax = new NegociacaoAjax()
		ConnectionFactory
			.getConnection()
			.then(conexao => this._negociacaoDAO = new NegociacaoDAO(conexao))
			.then(() => this.listarNegociacoes())
			.catch(erro => this.mensagemModel.erro(erro))
			.finally((() => Object.freeze(this)))
	}
	
	/**
	 * Utiliza o NegociacaoDAO para buscar do banco de dados
	 * todas as negociações cadastradas
	 * Retorna o resultado na tela utilizando as classes
	 * MensagemView e NegociacoesView
	 *
	 */
	listarNegociacoes() {
		this._negociacaoDAO
		    .listarTodos()
		    .then(negociacaoList => {
			    for (let negociacao of negociacaoList.negociacoes) {
				    this.negociacaoListModel.adicionar(negociacao)
			    }
		    })
		    .catch(erro => this.mensagemModel.erro(erro))
	}
	
	/**
	 * TODO: implementar DAO
	 * Utiliza o NegociacaoDAO para limpar todas as negociações
	 * salvas no banco de dados
	 * @param evento
	 */
	apagarLista(evento) {
		evento.preventDefault()
		this._negociacaoDAO
		    .apagarTodos()
		    .then(() => this.negociacaoListModel.esvaziar())
		    .then(() => this.mensagemModel.aviso("Lista esvaziada com sucesso!"))
		    .catch(erro => this.mensagemModel.erro(erro))
	}
	
	/**
	 * Utiliza o NegociacaoDAO para cadastrar no banco de dados
	 * uma instância de Negociacao criada a partir dos dados
	 * do formulário
	 * Retorna o resultado na tela utilizando as classes
	 * MensagemView e NegociacoesView
	 *
	 * @param evento
	 */
	adicionar(evento) {
		evento.preventDefault()
		let negociacao = NegociacaoController._criarNegociacao()
		this._negociacaoDAO
		    .salvar(negociacao)
		    .then(e => {
			    this.negociacaoListModel.adicionar(negociacao)
			    this.mensagemModel.sucesso("Negociação cadastrada com sucesso!")
			    NegociacaoController._limparFormulario()
		    })
		    .catch(erro => this.mensagemModel.erro(erro))
	}
	
	/**
	 * Chama o método de orgenação de negociações
	 * da classe NegociacaoList
	 *
	 * @param {string} campo
	 */
	ordenarLista(campo) {
		this.negociacaoListModel.ordenarLista(campo)
	}
	
	/**
	 * Método utilizado pela classe para criar uma nova instância
	 * de Negociacao a partir dos dados preenchidos no formulário
	 *
	 * @param {boolean} objetoLiteral
	 * @returns {Object | Negociacao}
	 * @private
	 */
	static _criarNegociacao(objetoLiteral = false) {
		let objeto = {
			data      : DateHelper.textoParaData(CD.inputData.value),
			quantidade: parseInt(CD.inputQuantidade.value),
			valor     : parseFloat(CD.inputValor.value),
		}
		return objetoLiteral ? objeto : new Negociacao(objeto)
	}
	
	/**
	 * Método utilizado pela classe para limpar o formulário
	 * de cadastro de negociações
	 *
	 * @private
	 */
	static _limparFormulario() {
		CD.formNegociacoes.reset()
		CD.inputData.focus()
	}
	
	// Operações via AJAX
	
	/**
	 * Utiliza a classe NegociacaoAjax para enviar para o server
	 * uma instância de Negociacao criada a partir do formulário
	 * @param evento
	 */
	enviarNegociacaoAjax(evento) {
		evento.preventDefault()
		let negociacao = JSON.stringify(NegociacaoController._criarNegociacao(true))
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
	
	/**
	 * Importa do servidor todas as negociações que estejam
	 * no período enviado por parâmetro (semana|passada|retrasada)
	 * e apresenta o resultado na tela utilizando as classes
	 * MensagemView e NegociacoesView
	 *
	 * Irá ignorar negociações já importadas
	 *
	 * @param periodo
	 */
	importarNegociacoesAjax(periodo = 'semana') {
		this._negociacaoAjax.importarNegociacoes(periodo, () => this._informarInicioImportacaoAjax())
		    .then(negociacoes => this._preencherListaComNegociacoesImportadas(negociacoes))
		    .catch(erro => this.mensagemModel.erro(erro))
	}
	
	/**
	 * Utiliza o Promise.all para enviar três requisições
	 * em sequência para o servidor, listando as negociações
	 * dos períodos 'semana [atual|passada|retrasada]'
	 */
	importarTodasNegociacoesAjax() {
		Promise.all([
			this._negociacaoAjax.importarNegociacoes('semana', () => this._informarInicioImportacaoAjax()),
			this._negociacaoAjax.importarNegociacoes('anterior'),
			this._negociacaoAjax.importarNegociacoes('retrasada'),
		]).then(negociacoes => {
			let negociacoesFlat = negociacoes.reduce(
				(negociacoesFlat, negociacoes) => negociacoesFlat.concat(negociacoes), [],
			)
			this._preencherListaComNegociacoesImportadas(negociacoesFlat)
		}).catch(erro => this.mensagemModel.erro(erro))
	}
	
	/**
	 * Preenche a classe NegociacoesList com uma lista de instâncias de Negociacao,
	 * exibindo os novos dados e a mensagem do resultado na tela
	 *
	 * @param {array<Negociacao>} negociacoes
	 * @private
	 */
	_preencherListaComNegociacoesImportadas(negociacoes) {
		negociacoes
			.map(negociacao =>
				new Negociacao({
					data      : new Date(negociacao.data),
					quantidade: negociacao.quantidade,
					valor     : negociacao.valor,
				}),
			)
			.filter(negociacao =>
				!this.negociacaoListModel.negociacoes.some(negociacaoExistente =>
					JSON.stringify(negociacao) === JSON.stringify(negociacaoExistente),
				),
			)
			.forEach(negociacao => this.negociacaoListModel.adicionar(negociacao))
		
		this.mensagemModel.info("Negociações importadas com sucesso! <small>Negocições repetidas foram ignoradas</small>")
	}
	
	/**
	 * Exibe na tela a mensagem de que as negociações estão sendo importadas
	 * @private
	 */
	_informarInicioImportacaoAjax() {
		this.mensagemModel.info('Importanto negociações...')
	}
}
