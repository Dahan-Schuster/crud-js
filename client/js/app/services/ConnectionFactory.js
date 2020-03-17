/**
 * Classe responsável por segurar e retornar uma conexão com o IndexedDB
 */
const ConnectionFactory = (() => {
	
	/**
	 * Versão do banco de dados
	 * @type {number}
	 */
	const IDB_VERSAO = 1
	/**
	 * Nome do banco de dados
	 * @type {string}
	 */
	const IDB_NOME = 'NegociacoesDb'
	/**
	 * Object Stores (tabelas não relacionais) do banco de dados
	 * @type {string[]}
	 */
	const OBJECT_STORES = ['negociacoes']
	
	let connection, closeConnection
	
	return class ConnectionFactory {
		
		/**
		 * Abre uma nova conexão com o IndexedDB,
		 * ou retorna uma já existente
		 *
		 * @returns {Promise}
		 */
		static getConnection() {
			
			return new Promise((resolve, reject) => {
				let openDBRequest = window.indexedDB.open(IDB_NOME, IDB_VERSAO)
				
				openDBRequest.onupgradeneeded = configurarEstruturaDoBanco
				openDBRequest.onsuccess = e => resolve(connection ? connection : novaConexao(e))
				openDBRequest.onerror = e => {
					console.log(e.target.error)
					reject(e.target.error.name)
				}
			})
			
			/**
			 * TODO: backup do banco antes de realizar a atualização
			 * 1) fazer backup dos dados da Obj Storage em uma clone
			 * 2) Recriar a Obj Storage original
			 * 3) Tentar popular a nova Obj Storage com os dados antigos
			 * 4) Deletar a Obj Storage de backup em caso de sucesso
			 * 5) Informar a falha em caso de erro e manter o backup
			 * *) Usar o envento IDBDatabase.onversionchange
			 */
			function configurarEstruturaDoBanco(e) {
				let IDBDatabase = e.target.result
				
				OBJECT_STORES.forEach(objectStore => {
					if (IDBDatabase.objectStoreNames.contains(objectStore)) {
						IDBDatabase.deleteObjectStore(objectStore)
					}
					IDBDatabase.createObjectStore(objectStore, {autoIncrement: true})
				})
			}
			
			/**
			 * Para uso interno do método
			 * Abre uma nova conexão com o IndexedDB
			 *
			 * @param e
			 * @returns {IDBDatabase}
			 */
			function novaConexao(e) {
				connection = e.target.result
				closeConnection = connection.close.bind(connection)
				connection.close = function () {
					throw new Error('A conexão é compartilhada e, portanto, não deve ser fechada')
				}
				return connection
			}
			
		}
		
		/**
		 * Método privado que sobrepõe o método IDBDatabase.close
		 *
		 * @private
		 */
		static _closeConnection() {
			if (connection) {
				closeConnection()
				connection = null
			}
		}
		
	}
})()
