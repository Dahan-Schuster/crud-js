System.register([], function (_export, _context) {
  "use strict";

  var IDB_VERSAO, IDB_NOME, OBJECT_STORES, connection, closeConnection, ConnectionFactory;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  _export({
    connection: void 0,
    closeConnection: void 0
  });

  return {
    setters: [],
    execute: function () {
      /**
       * Versão do banco de dados
       * @type {number}
       */
      IDB_VERSAO = 1;
      /**
       * Nome do banco de dados
       * @type {string}
       */

      IDB_NOME = 'NegociacoesDb';
      /**
       * Object Stores (tabelas não relacionais) do banco de dados
       * @type {string[]}
       */

      OBJECT_STORES = ['negociacoes'];

      _export("ConnectionFactory", ConnectionFactory = /*#__PURE__*/function () {
        function ConnectionFactory() {
          _classCallCheck(this, ConnectionFactory);
        }

        _createClass(ConnectionFactory, null, [{
          key: "getConnection",

          /**
           * Abre uma nova conexão com o IndexedDB,
           * ou retorna uma já existente
           *
           * @returns {Promise}
           */
          value: function getConnection() {
            return new Promise(function (resolve, reject) {
              var openDBRequest = window.indexedDB.open(IDB_NOME, IDB_VERSAO);
              openDBRequest.onupgradeneeded = configurarEstruturaDoBanco;

              openDBRequest.onsuccess = function (e) {
                return resolve(connection ? connection : novaConexao(e));
              };

              openDBRequest.onerror = function (e) {
                console.log(e.target.error);
                reject('Não foi possível se conectar ao banco de dados.');
              };
            });
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
              var IDBDatabase = e.target.result;
              OBJECT_STORES.forEach(function (objectStore) {
                if (IDBDatabase.objectStoreNames.contains(objectStore)) {
                  IDBDatabase.deleteObjectStore(objectStore);
                }

                IDBDatabase.createObjectStore(objectStore, {
                  autoIncrement: true
                });
              });
            }
            /**
             * Para uso interno do método
             * Abre uma nova conexão com o IndexedDB
             *
             * @param e
             * @returns {IDBDatabase}
             */


            function novaConexao(e) {
              connection = e.target.result;
              closeConnection = connection.close.bind(connection);

              connection.close = function () {
                throw new Error('A conexão é compartilhada e, portanto, não deve ser fechada');
              };

              return connection;
            }
          }
          /**
           * Método privado que sobrepõe o método IDBDatabase.close
           *
           * @private
           */

        }, {
          key: "_closeConnection",
          value: function _closeConnection() {
            if (connection) {
              closeConnection();
              connection = null;
            }
          }
        }]);

        return ConnectionFactory;
      }());
    }
  };
});
//# sourceMappingURL=ConnectionFactory.js.map