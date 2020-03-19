"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Negociacao = /*#__PURE__*/function () {
  // jshint ignore:line

  /**
   * Negociação constructor
   *
   * @param data
   * @param quantidade
   * @param valor
   */
  function Negociacao(_ref) {
    var data = _ref.data,
        quantidade = _ref.quantidade,
        valor = _ref.valor;

    _classCallCheck(this, Negociacao);

    this._data = new Date(data ? data.getTime() : null); // instancia uma nova data, previnindo alteração da proprieadade por referência

    this._quantidade = quantidade || 0;
    this._valor = parseFloat(valor) || 0;
    Object.freeze(this);
  }

  _createClass(Negociacao, [{
    key: "equals",
    value: function equals(outraNegociacao) {
      return JSON.stringify(this) === JSON.stringify(outraNegociacao);
    }
  }, {
    key: "data",
    get: function get() {
      return new Date(this._data.getTime()); // instancia uma nova data e retorna, previnindo alterações na propriedades do objeto Data da Negociação
    }
  }, {
    key: "quantidade",
    get: function get() {
      return this._quantidade;
    }
  }, {
    key: "valor",
    get: function get() {
      return this._valor;
    }
  }, {
    key: "volume",
    get: function get() {
      return this._quantidade * this._valor;
    }
  }]);

  return Negociacao;
}();
//# sourceMappingURL=Negociacao.js.map