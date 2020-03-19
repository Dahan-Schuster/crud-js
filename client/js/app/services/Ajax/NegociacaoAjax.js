"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var NegociacaoAjax = /*#__PURE__*/function () {
  function NegociacaoAjax() {
    _classCallCheck(this, NegociacaoAjax);
  }

  _createClass(NegociacaoAjax, [{
    key: "enviarDados",
    value: function enviarDados(negociacao, callbackFn, antesDeEnviar) {
      AjaxHelper.ajax({
        url: '/negociacoes',
        metodo: 'POST',
        dados: negociacao,
        tipoDados: "application/json",
        antesDeEnviar: antesDeEnviar,
        sucesso: function sucesso(resposta) {
          return callbackFn(null, resposta);
        },
        erro: function erro(_erro) {
          console.log(_erro);
          callbackFn('Não foi possível salvar a negociação :(');
        }
      });
    }
  }, {
    key: "importarNegociacoes",
    value: function importarNegociacoes() {
      var periodo = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'semana';
      var antesDeEnviar = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      return new Promise(function (resolve, reject) {
        AjaxHelper.ajax({
          url: "/negociacoes/".concat(periodo),
          metodo: 'GET',
          tipoRetorno: 'json',
          antesDeEnviar: antesDeEnviar,
          sucesso: function sucesso(resposta) {
            return resolve(resposta);
          },
          erro: function erro(_erro2) {
            return reject('Não foi possível obter as negociações :(');
          }
        });
      });
    }
  }]);

  return NegociacaoAjax;
}();
//# sourceMappingURL=NegociacaoAjax.js.map