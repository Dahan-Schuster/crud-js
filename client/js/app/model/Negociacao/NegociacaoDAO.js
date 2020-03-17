class NegociacaoDAO extends DAO{
	
	/**
	 * Inicia o NegociacaoDAO
	 * @param {IDBDatabase} conexao
	 */
	constructor(conexao) {
		super(conexao)
		this._store = 'negociacoes'
	}
	
	/**
	 * Pesquisa por todas as negociações salvas no banco
	 * e retorna uma instância de NegociacaoList
	 *
	 * @return {Promise<NegociacaoList>}
	 */
	listarTodos() {
		return new Promise((resolve, reject) => {
			let ponteiro = this.iniciarTransacao().openCursor(),
				negociacaoList = new NegociacaoList()
			
			ponteiro.onsuccess = e => {
				let atual = e.target.result
				if (atual !== null) {
					let negociacao = atual.value
					negociacaoList.adicionar(new Negociacao({
						data: negociacao._data,
						quantidade: negociacao._quantidade,
						valor: negociacao._valor
					}))
					
					atual.continue()
				} else {
					resolve(negociacaoList)
				}
			}
			ponteiro.onerror = e => {
				console.log(e.target.error)
				reject('Não foi possível listar as negociações.')
			}
		})
	}
	
	/**
	 * Salva um objeto Negociacao no banco de dados
	 * @param {Negociacao} negociacao
	 * @returns {Promise}
	 */
	salvar(negociacao) {
		return new Promise((resolve, reject) => {
			let requisicao = this.iniciarTransacao().add(negociacao)
			requisicao.onsuccess = e => resolve(e)
			requisicao.onerror = e => {
				console.log(e.target.error)
				reject('Não foi possível finalizar a transação.')
			}
		})
	}

}
