System.register(["../DAO.js", "./NegociacaoList.js", "./Negociacao.js"], function (_export, _context) {
  "use strict";

  var DAO, NegociacaoList, Negociacao, NegociacaoDAO;

  function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  return {
    setters: [function (_DAOJs) {
      DAO = _DAOJs.DAO;
    }, function (_NegociacaoListJs) {
      NegociacaoList = _NegociacaoListJs.NegociacaoList;
    }, function (_NegociacaoJs) {
      Negociacao = _NegociacaoJs.Negociacao;
    }],
    execute: function () {
      _export("NegociacaoDAO", NegociacaoDAO = /*#__PURE__*/function (_DAO) {
        _inherits(NegociacaoDAO, _DAO);

        /**
         * Inicia o NegociacaoDAO
         * @param {IDBDatabase} conexao
         */
        function NegociacaoDAO(conexao) {
          var _this;

          _classCallCheck(this, NegociacaoDAO);

          _this = _possibleConstructorReturn(this, _getPrototypeOf(NegociacaoDAO).call(this, conexao));
          _this._store = 'negociacoes';
          return _this;
        }
        /**
         * Apaga todas as negociações salvas no banco
         *
         * @return {Promise}
         */


        _createClass(NegociacaoDAO, [{
          key: "apagarTodos",
          value: function apagarTodos() {
            var _this2 = this;

            return new Promise(function (resolve, reject) {
              var requisicao = _this2.iniciarTransacao().clear();

              requisicao.onsuccess = function (e) {
                return resolve(e);
              };

              requisicao.onerror = function (e) {
                console.log(e.target.error);
                reject('Não foi possível finalizar a transação.');
              };
            });
          }
          /**
           * Pesquisa por todas as negociações salvas no banco
           * e retorna uma instância de NegociacaoList
           *
           * @return {Promise<NegociacaoList>}
           */

        }, {
          key: "listarTodos",
          value: function listarTodos() {
            var _this3 = this;

            return new Promise(function (resolve, reject) {
              var ponteiro = _this3.iniciarTransacao().openCursor(),
                  negociacaoList = new NegociacaoList();

              ponteiro.onsuccess = function (e) {
                var atual = e.target.result;

                if (atual !== null) {
                  var negociacao = atual.value;
                  negociacaoList.adicionar(new Negociacao({
                    data: negociacao._data,
                    quantidade: negociacao._quantidade,
                    valor: negociacao._valor
                  }));
                  atual["continue"]();
                } else {
                  resolve(negociacaoList);
                }
              };

              ponteiro.onerror = function (e) {
                console.log(e.target.error);
                reject('Não foi possível listar as negociações.');
              };
            });
          }
          /**
           * Salva um objeto Negociacao no banco de dados
           * @param {Negociacao} negociacao
           * @returns {Promise}
           */

        }, {
          key: "salvar",
          value: function salvar(negociacao) {
            var _this4 = this;

            return new Promise(function (resolve, reject) {
              var requisicao = _this4.iniciarTransacao().add(negociacao);

              requisicao.onsuccess = function (e) {
                return resolve(e);
              };

              requisicao.onerror = function (e) {
                console.log(e.target.error);
                reject('Não foi possível finalizar a transação.');
              };
            });
          }
        }]);

        return NegociacaoDAO;
      }(DAO));
    }
  };
});
//# sourceMappingURL=NegociacaoDAO.js.map