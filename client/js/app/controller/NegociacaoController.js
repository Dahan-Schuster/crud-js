System.register(["../helpers/Container/CD.js", "../services/ConnectionFactory.js", "../model/Negociacao/Negociacao.js", "../model/Negociacao/NegociacaoDAO.js", "../services/Ajax/NegociacaoAjax.js", "../model/Negociacao/NegociacaoList.js", "../services/Handler/NegociacaoListHandler.js", "../model/Mensagem/Mensagem.js", "../services/Handler/MensagemHandler.js", "../helpers/DateHelper.js"], function (_export, _context) {
  "use strict";

  var CD, ConnectionFactory, Negociacao, NegociacaoDAO, NegociacaoAjax, NegociacaoList, NegociacaoListHandler, Mensagem, MensagemHandler, DateHelper, NegociacaoController, negociacaoController;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function instanciaAtual() {
    return negociacaoController;
  }

  _export("instanciaAtual", instanciaAtual);

  return {
    setters: [function (_helpersContainerCDJs) {
      CD = _helpersContainerCDJs.CD;
    }, function (_servicesConnectionFactoryJs) {
      ConnectionFactory = _servicesConnectionFactoryJs.ConnectionFactory;
    }, function (_modelNegociacaoNegociacaoJs) {
      Negociacao = _modelNegociacaoNegociacaoJs.Negociacao;
    }, function (_modelNegociacaoNegociacaoDAOJs) {
      NegociacaoDAO = _modelNegociacaoNegociacaoDAOJs.NegociacaoDAO;
    }, function (_servicesAjaxNegociacaoAjaxJs) {
      NegociacaoAjax = _servicesAjaxNegociacaoAjaxJs.NegociacaoAjax;
    }, function (_modelNegociacaoNegociacaoListJs) {
      NegociacaoList = _modelNegociacaoNegociacaoListJs.NegociacaoList;
    }, function (_servicesHandlerNegociacaoListHandlerJs) {
      NegociacaoListHandler = _servicesHandlerNegociacaoListHandlerJs.NegociacaoListHandler;
    }, function (_modelMensagemMensagemJs) {
      Mensagem = _modelMensagemMensagemJs.Mensagem;
    }, function (_servicesHandlerMensagemHandlerJs) {
      MensagemHandler = _servicesHandlerMensagemHandlerJs.MensagemHandler;
    }, function (_helpersDateHelperJs) {
      DateHelper = _helpersDateHelperJs.DateHelper;
    }],
    execute: function () {
      /**
       * Classe NegociacaoController
       * Responsável por intermediar operações envolvendo
       * a tela de negociações e a classe Negociacao
       */
      NegociacaoController = /*#__PURE__*/function () {
        /**
         * Inicaliza o controlador de negociações
         */
        function NegociacaoController() {
          var _this = this;

          _classCallCheck(this, NegociacaoController);

          this.negociacaoListModel = new Proxy(new NegociacaoList(), new NegociacaoListHandler());
          this.mensagemModel = new Proxy(new Mensagem(), new MensagemHandler());
          this._negociacaoAjax = new NegociacaoAjax();
          ConnectionFactory.getConnection().then(function (conexao) {
            return _this._negociacaoDAO = new NegociacaoDAO(conexao);
          })["catch"](function (erro) {
            return _this.mensagemModel.erro(erro);
          })["finally"](function () {
            return Object.freeze(_this);
          })["finally"](function () {
            return _this._init();
          });
        }
        /**
         * Define algumas instruções que devem ser realizadas após a construção do controlador
         * @private
         */


        _createClass(NegociacaoController, [{
          key: "_init",
          value: function _init() {
            var _this2 = this;

            this.importarTodasNegociacoesAjax();
            this.listarNegociacoes();
            setInterval(function () {
              return _this2.importarTodasNegociacoesAjax();
            }, 10000);
          }
          /**
           * Utiliza o NegociacaoDAO para buscar do banco de dados
           * todas as negociações cadastradas
           * Retorna o resultado na tela utilizando as classes
           * MensagemView e NegociacoesView
           *
           */

        }, {
          key: "listarNegociacoes",
          value: function listarNegociacoes() {
            var _this3 = this;

            this._negociacaoDAO.listarTodos().then(function (negociacaoList) {
              var _iteratorNormalCompletion = true;
              var _didIteratorError = false;
              var _iteratorError = undefined;

              try {
                for (var _iterator = negociacaoList.negociacoes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                  var negociacao = _step.value;

                  _this3.negociacaoListModel.adicionar(negociacao);
                }
              } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion && _iterator["return"] != null) {
                    _iterator["return"]();
                  }
                } finally {
                  if (_didIteratorError) {
                    throw _iteratorError;
                  }
                }
              }
            })["catch"](function (erro) {
              return _this3.mensagemModel.erro(erro);
            });
          }
          /**
           * Utiliza o NegociacaoDAO para limpar todas as negociações
           * salvas no banco de dados
           * @param evento
           */

        }, {
          key: "apagarLista",
          value: function apagarLista(evento) {
            var _this4 = this;

            evento.preventDefault();

            this._negociacaoDAO.apagarTodos().then(function () {
              return _this4.negociacaoListModel.esvaziar();
            }).then(function () {
              return _this4.mensagemModel.aviso("Lista esvaziada com sucesso!");
            })["catch"](function (erro) {
              return _this4.mensagemModel.erro(erro);
            });
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

        }, {
          key: "adicionar",
          value: function adicionar(evento) {
            var _this5 = this;

            evento.preventDefault();

            var negociacao = NegociacaoController._criarNegociacao();

            this._negociacaoDAO.salvar(negociacao).then(function (e) {
              _this5.negociacaoListModel.adicionar(negociacao);

              _this5.mensagemModel.sucesso("Negociação cadastrada com sucesso!");

              NegociacaoController._limparFormulario();
            })["catch"](function (erro) {
              return _this5.mensagemModel.erro(erro);
            });
          }
          /**
           * Chama o método de orgenação de negociações
           * da classe NegociacaoList
           *
           * @param {string} campo
           */

        }, {
          key: "ordenarLista",
          value: function ordenarLista(campo) {
            this.negociacaoListModel.ordenarLista(campo);
          }
          /**
           * Método utilizado pela classe para criar uma nova instância
           * de Negociacao a partir dos dados preenchidos no formulário
           *
           * @param {boolean} objetoLiteral
           * @returns {Object | Negociacao}
           * @private
           */

        }, {
          key: "enviarNegociacaoAjax",
          // Operações via AJAX

          /**
           * Utiliza a classe NegociacaoAjax para enviar para o server
           * uma instância de Negociacao criada a partir do formulário
           * @param evento
           */
          value: function enviarNegociacaoAjax(evento) {
            var _this6 = this;

            evento.preventDefault();
            var negociacao = JSON.stringify(NegociacaoController._criarNegociacao(true));

            this._negociacaoAjax.enviarDados(negociacao, function (erro, resposta) {
              if (erro) {
                _this6.mensagemModel.erro(erro);

                return;
              }

              _this6.mensagemModel.sucesso('Negociação enviada com sucesso!');
            }, function () {
              return _this6.mensagemModel.info('Enviando negociação...');
            });
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

        }, {
          key: "importarNegociacoesAjax",
          value: function importarNegociacoesAjax() {
            var _this7 = this;

            var periodo = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'semana';

            this._negociacaoAjax.importarNegociacoes(periodo, function () {
              return _this7._informarInicioImportacaoAjax();
            }).then(function (negociacoes) {
              return _this7._preencherListaComNegociacoesImportadas(negociacoes);
            })["catch"](function (erro) {
              return _this7.mensagemModel.erro(erro);
            });
          }
          /**
           * Utiliza o Promise.all para enviar três requisições
           * em sequência para o servidor, listando as negociações
           * dos períodos 'semana [atual|passada|retrasada]'
           */

        }, {
          key: "importarTodasNegociacoesAjax",
          value: function importarTodasNegociacoesAjax() {
            var _this8 = this;

            Promise.all([this._negociacaoAjax.importarNegociacoes('semana', function () {
              return _this8._informarInicioImportacaoAjax();
            }), this._negociacaoAjax.importarNegociacoes('anterior'), this._negociacaoAjax.importarNegociacoes('retrasada')]).then(function (negociacoes) {
              var negociacoesFlat = negociacoes.reduce(function (negociacoesFlat, negociacoes) {
                return negociacoesFlat.concat(negociacoes);
              }, []);

              _this8._preencherListaComNegociacoesImportadas(negociacoesFlat);
            })["catch"](function (erro) {
              return _this8.mensagemModel.erro(erro);
            });
          }
          /**
           * Preenche a classe NegociacoesList com uma lista de instâncias de Negociacao,
           * exibindo os novos dados e a mensagem do resultado na tela
           *
           * @param {array<Negociacao>} negociacoes
           * @private
           */

        }, {
          key: "_preencherListaComNegociacoesImportadas",
          value: function _preencherListaComNegociacoesImportadas(negociacoes) {
            var _this9 = this;

            negociacoes.map(function (negociacao) {
              return new Negociacao({
                data: new Date(negociacao.data),
                quantidade: negociacao.quantidade,
                valor: negociacao.valor
              });
            }).filter(function (negociacao) {
              return !_this9.negociacaoListModel.negociacoes.some(function (negociacaoExistente) {
                return negociacao.equals(negociacaoExistente);
              });
            }).forEach(function (negociacao) {
              return _this9.negociacaoListModel.adicionar(negociacao);
            });
            this.mensagemModel.info("Negociações importadas com sucesso! <small>Negocições repetidas foram ignoradas</small>");
          }
          /**
           * Exibe na tela a mensagem de que as negociações estão sendo importadas
           * @private
           */

        }, {
          key: "_informarInicioImportacaoAjax",
          value: function _informarInicioImportacaoAjax() {
            this.mensagemModel.info('Importanto negociações...');
          }
        }], [{
          key: "_criarNegociacao",
          value: function _criarNegociacao() {
            var objetoLiteral = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
            var objeto = {
              data: DateHelper.textoParaData(CD.inputData.value),
              quantidade: parseInt(CD.inputQuantidade.value),
              valor: parseFloat(CD.inputValor.value)
            };
            return objetoLiteral ? objeto : new Negociacao(objeto);
          }
          /**
           * Método utilizado pela classe para limpar o formulário
           * de cadastro de negociações
           *
           * @private
           */

        }, {
          key: "_limparFormulario",
          value: function _limparFormulario() {
            CD.formNegociacoes.reset();
            CD.inputData.focus();
          }
        }]);

        return NegociacaoController;
      }();

      negociacaoController = new NegociacaoController();
    }
  };
});
//# sourceMappingURL=NegociacaoController.js.map