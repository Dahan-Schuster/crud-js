"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var DAO = /*#__PURE__*/function () {
  /**
   * Inicializa o DAO com uma conexão
   *
   * @throws ClasseAbstrataError caso a classe DAO seja instanciada
   * @throws Error caso o parametro conexao não seja uma instância de IDBDatabase
   * @param {IDBDatabase} conexao
   */
  function DAO(conexao) {
    _classCallCheck(this, DAO);

    _defineProperty(this, "LEITURA_ESCRITA", 'readwrite');

    _defineProperty(this, "LEITURA", 'read');

    if (this.constructor === DAO) {
      throw new ClasseAbstrataError('DAO');
    }

    if (!conexao instanceof IDBDatabase) {
      throw new Error('O parâmetro "conexao" deve ser uma instância de IDBDatabase');
    }

    this._conexao = conexao;
    this._store = '';
  }
  /**
   * Inicia uma transação com o IndexedDB a partir da conexão
   *
   * @param modoAcesso
   * @returns {IDBObjectStore}
   */


  _createClass(DAO, [{
    key: "iniciarTransacao",
    value: function iniciarTransacao() {
      var modoAcesso = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.LEITURA_ESCRITA;
      return this._conexao.transaction([this._store], modoAcesso).objectStore(this._store);
    }
  }]);

  return DAO;
}();
//# sourceMappingURL=DAO.js.map