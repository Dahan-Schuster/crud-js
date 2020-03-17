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