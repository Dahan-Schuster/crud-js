import {ClasseAbstrataError} from "../error/Errors.js"

export class DAO {
	
	LEITURA_ESCRITA = 'readwrite'
	LEITURA = 'read'
	
	/**
	 * Inicializa o DAO com uma conexão
	 *
	 * @throws ClasseAbstrataError caso a classe DAO seja instanciada
	 * @throws Error caso o parametro conexao não seja uma instância de IDBDatabase
	 * @param {IDBDatabase} conexao
	 */
	constructor(conexao) {
		if (this.constructor === DAO) {
			throw new ClasseAbstrataError('DAO')
		}
		if (!conexao instanceof IDBDatabase) {
			throw new Error('O parâmetro "conexao" deve ser uma instância de IDBDatabase')
		}
		this._conexao = conexao
		this._store = ''
	}
	
	/**
	 * Inicia uma transação com o IndexedDB a partir da conexão
	 *
	 * @param modoAcesso
	 * @returns {IDBObjectStore}
	 */
	iniciarTransacao(modoAcesso = this.LEITURA_ESCRITA) {
		return this._conexao
			.transaction([this._store], modoAcesso)
		    .objectStore(this._store)
	}
}